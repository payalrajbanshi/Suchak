using Suchak.Core.DTOs.Tasks;
using Suchak.Core.Entities;
using Suchak.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Suchak.Core.Services
{
    public class TaskService: ITaskService
    {
        private readonly ITaskRepository _taskRepository;
        public TaskService(ITaskRepository taskRepository)
        {
            _taskRepository = taskRepository;
        }
        public async  Task<long> CreateTaskAsync(int userId, CreateTaskDTO dto)
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
                Order = 0

            };
            await _taskRepository.AddAsync(task);
            return task.Id;
        }
        public async Task<List<TaskResponseDTO>> GetUserTasksAsync(int userId)
        {
            var tasks= await _taskRepository.GetByUserIdAsync(userId);
            return tasks.Select(t => new TaskResponseDTO
            {
                Id = t.Id,
                Title = t.Title,
                Description = t.Description,
                Deadline = t.Deadline,
                EstimatedHours = t.EstimatedHours,
                Priority = t.Priority,
                IsCompleted = t.IsCompleted,
                Order = t.Order
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
            _taskRepository.Update(task);
        }
        public async Task DeleteTaskAsync(int taskId)
        {
            var result = await _taskRepository.GetByIdAsync(taskId);
            if (result == null)
                throw new Exception("result not found");
            _taskRepository.Delete(result);
        }
        public  double CalculateDailyWork(int estimatedHours, DateTime deadline)
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
        public async Task ReorderTaskAsync(List<ReoderTaskDTO> tasks)
        {
            foreach (var item in tasks)
            {
                var task = await _taskRepository.GetByIdAsync(item.TaskId);
                if (task != null)
                {
                    task.Order = item.Order;
                    _taskRepository.Update(task);
                }
                
            }
        }
    }
}
