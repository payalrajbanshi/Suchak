using Suchak.Core.DTOs.Tasks;
using Suchak.Core.Entities;

namespace Suchak.Core.BusinessRules
{
    public class TaskPlanningCalculator
    {
        public int GetDaysLeft(TaskItem task)
        {
            return Math.Max(
                (task.Deadline.Date - DateTime.Now.Date).Days,
                1);
        }

        public double GetRemainingHours(TaskItem task)
        {
            return Math.Max(
                0,
                task.EstimatedHours - task.CompletedHours);
        }

        public double GetPriorityMultiplier(int priority)
        {
            return priority switch
            {
                3 => 1.3,
                2 => 1.1,
                _ => 1.0
            };
        }

        public double CalculateDailyWork(
            int estimatedHours,
            DateTime deadline)
        {
            var daysLeft =
                (deadline.Date - DateTime.Now.Date).Days;

            if (daysLeft <= 0)
                return estimatedHours;

            return Math.Round(
                (double)estimatedHours / daysLeft,
                2);
        }

        public List<TaskResponseDTO> GetTodayPlan(
            List<TaskResponseDTO> tasks)
        {
            return tasks
                .Where(t => !t.IsCompleted)
                .OrderBy(t => t.Deadline)
                .ToList();
        }

        public SmartSuggestionDTO GenerateSuggestion(
            TaskItem task,
            double availableHours)
        {
            var daysLeft = GetDaysLeft(task);

            var remainingHours =
                GetRemainingHours(task);

            var baseHours =
                remainingHours / daysLeft;

            var calculated =
                baseHours *
                GetPriorityMultiplier(task.Priority);

            bool overloaded =
                calculated > availableHours;

            var finalHours =
                Math.Min(
                    Math.Round(calculated, 2),
                    availableHours);

            return new SmartSuggestionDTO
            {
                TaskId = task.Id,
                Title = task.Title,
                HoursToDoToday = finalHours,
                Deadline = task.Deadline,
                Warning = overloaded
                    ? "Too much work for today"
                    : ""
            };
        }

        public BalancedPlanDTO GenerateBalancedPlan(
            TaskItem task,
            double availableToday)
        {
            var daysLeft = GetDaysLeft(task);

            var remainingHours =
                GetRemainingHours(task);

            double requiredPerDay;

            if (daysLeft <= 0)
            {
                requiredPerDay = remainingHours;
            }
            else
            {
                requiredPerDay =
                    remainingHours / daysLeft;
            }

            var hoursToday =
                Math.Min(requiredPerDay,
                availableToday);

            var remaining =
                remainingHours - hoursToday;

            return new BalancedPlanDTO
            {
                TaskId = task.Id,
                Title = task.Title,
                HoursToday = Math.Round(hoursToday, 2),
                RemainingHours = Math.Round(remaining, 2),
                Deadline = task.Deadline
            };
        }
    }
}