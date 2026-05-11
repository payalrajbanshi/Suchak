using Suchak.Core.DTOs.Tasks;
using Suchak.Core.Entities;
using Suchak.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using TaskStatus = Suchak.Core.Entities.TaskStatus;
namespace Suchak.Core.Services
{
    public class TaskService : ITaskService
    {
        private readonly ITaskRepository _taskRepository;
        private readonly IUserRepository _userRepository;
        public TaskService(ITaskRepository taskRepository, IUserRepository userRepository)
        {
            _taskRepository = taskRepository;
            _userRepository = userRepository;
        }
        public async Task<long> CreateTaskAsync(int userId, CreateTaskDTO dto)
        {
            var task = new TaskItem
            {
                Title = dto.Title,
                Description = dto.Description,
                Deadline = dto.Deadline,
                EstimatedHours = dto.EstimatedHours,
                Priority = dto.Priority,
                UserId = userId,
                IsCompleted = false,
                Order = 0,
                Status=TaskStatus.Todo,
                CreatedAt=DateTime.UtcNow

            };
            await _taskRepository.AddAsync(task);
            return task.Id;
        }
        public async Task<List<TaskResponseDTO>> GetUserTasksAsync(int userId)
        {
            var tasks = await _taskRepository.GetByUserIdAsync(userId);
            return tasks.Select(t => new TaskResponseDTO
            {
                Id = t.Id,
                Title = t.Title,
                Description = t.Description,
                Deadline = t.Deadline,
                EstimatedHours = t.EstimatedHours,
                CompletedHours=t.CompletedHours,
                Priority = t.Priority,
                IsCompleted = t.IsCompleted,
                Order = t.Order,
                Status=t.Status
            }).ToList();
        }
        public async Task UpdateTaskAsync(UpdateTaskDTO dto)
        {
            var task = await _taskRepository.GetByIdAsync(dto.Id);
            if (task == null)
                throw new Exception("Task not found");
            task.Title = dto.Title;
            task.Description = dto.Description;
            task.Deadline = dto.Deadline;
            task.EstimatedHours = dto.EstimatedHours;
            task.Priority = dto.Priority;
            task.IsCompleted = dto.IsCompleted;
            task.Order = dto.Order;
            _taskRepository.Update(task);
        }
        public async Task DeleteTaskAsync(int taskId)
        {
            var result = await _taskRepository.GetByIdAsync(taskId);
            if (result == null)
                throw new Exception("result not found");
            _taskRepository.Delete(result);
        }
        public double CalculateDailyWork(int estimatedHours, DateTime deadline)
        {
            var daysLeft = (deadline.Date - DateTime.Now.Date).Days;
            if (daysLeft <= 0)
                return estimatedHours;
            return Math.Round((double)estimatedHours / daysLeft, 2);
        }
        public List<TaskResponseDTO> GetTodayPlan(List<TaskResponseDTO> tasks)
        {
            return tasks
                .Where(t => !t.IsCompleted)
                .OrderBy(t => t.Deadline)
                .ToList();
        }
        public async Task ReorderTaskAsync(List<ReoderTaskDTO> dto)
        {
            foreach (var item in dto)
            {
                var task = await _taskRepository.GetByIdAsync(item.TaskId);
                if (task != null)
                {
                    task.Order = item.Order;
                    _taskRepository.Update(task);
                }

            }


        }
        public async Task ToggleCompleteAsync(int taskId)
        {
            var task = await _taskRepository.GetByIdAsync(taskId);
            if (task == null)
                throw new Exception("Task not found");
            task.IsCompleted = !task.IsCompleted;
            _taskRepository.Update(task);
        }
        public async Task<List<SmartSuggestionDTO>> GetSmartSuggestionsAsync(int userId)
        {
            var tasks = await _taskRepository.GetByUserIdAsync(userId);
            var user = await _userRepository.GetByIdAsync(userId);
            var today = DateTime.Now.Date;
            double availableHours = user.AvailableHoursPerDay;
            var suggestions = new List<SmartSuggestionDTO>();
            foreach (var t in tasks.Where(t => !t.IsCompleted))
            {
                var daysLeft = (t.Deadline.Date - today).Days;
                daysLeft = Math.Max(daysLeft, 1);
                
                double remainingHours = Math.Max(0,t.EstimatedHours - t.CompletedHours);

                double baseHours = remainingHours / daysLeft;
                double priorityMultiplier = t.Priority switch
                {
                    3 => 1.3,
                    2 => 1.1,
                    _ => 1.0
                };
                
                double calculated = baseHours * priorityMultiplier;
                double finalHours = Math.Min(Math.Round(calculated,2),availableHours);
                string warning = "";
                if (finalHours > availableHours)
                {
                    warning = "Too much work for today";
                }
                suggestions.Add(new SmartSuggestionDTO
                {
                    TaskId = t.Id,
                    Title = t.Title,
                    HoursToDoToday = finalHours,
                    Deadline = t.Deadline,
                    Warning = warning
                });
            }
            return suggestions.OrderByDescending(t => t.HoursToDoToday)
                .Take(5)
                .ToList();
        }

        public async Task<List<BalancedPlanDTO>> GetBalancedPlansAsync(int userId)
        {
            var tasks = await _taskRepository.GetByUserIdAsync(userId);
            var user = await _userRepository.GetByIdAsync(userId);
            var today = DateTime.Now.Date;
            double availableHours = user.AvailableHoursPerDay;
            var result = new List<BalancedPlanDTO>();
            double usedHours = 0;
            var pendingTasks = tasks
                .Where(t => !t.IsCompleted)
                .OrderBy(t => t.Deadline)
                .ToList();
            foreach (var t in pendingTasks)
            {
                if (usedHours >= availableHours)
                    break;
                var daysLeft = (t.Deadline.Date - today).Days;
                double remainingHours = Math.Max(0, t.EstimatedHours - t.CompletedHours);
                if (remainingHours <= 0)
                    continue;
                double requiredPerDay;
                if (daysLeft <= 0)
                {
                    requiredPerDay = remainingHours;
                }
                else
                {
                    requiredPerDay = remainingHours / daysLeft;
                }
                    double availableToday = availableHours - usedHours;
                double HoursToday = Math.Min(requiredPerDay, availableToday);
                double remaining = remainingHours - HoursToday;
                result.Add(new BalancedPlanDTO
                {
                    TaskId = t.Id,
                    Title = t.Title,
                    HoursToday = Math.Round(HoursToday, 2),
                    RemainingHours = Math.Round(remaining, 2),
                    Deadline = t.Deadline
                });

                usedHours += HoursToday;

            }
            return result;
        }

        public async Task UpdateStatusAsync(int taskId, TaskStatus status)
        {
            var task = await _taskRepository.GetByIdAsync(taskId);

            if (task == null)
                throw new Exception("Task not found");

            task.Status = status;

            _taskRepository.Update(task);
        }
    }
}
