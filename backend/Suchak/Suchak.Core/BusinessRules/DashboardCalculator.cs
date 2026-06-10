using Suchak.Core.DTOs.Dashboard;
using Suchak.Core.DTOs.Tasks;

namespace Suchak.Core.BusinessRules
{
    public class DashboardCalculator
    {
        public DashboardDTO GetSummary(
            List<TaskResponseDTO> tasks)
        {
            return new DashboardDTO
            {
                TotalTasks = tasks.Count,
                CompletedTasks =
                    tasks.Count(t => t.IsCompleted),
                PendingTasks =
                    tasks.Count(t => !t.IsCompleted)
            };
        }

        public List<WeeklyReportDTO> GetWeeklyReports(
            List<TaskResponseDTO> tasks)
        {
            var last7Days =
                Enumerable.Range(0, 7)
                .Select(i =>
                    DateTime.Now.Date.AddDays(-i))
                .Reverse()
                .ToList();

            return last7Days
                .Select(day => new WeeklyReportDTO
                {
                    Day = day.ToString("ddd"),
                    TasksCompleted =
                        tasks.Count(t =>
                            t.CreatedAt.Date == day)
                })
                .ToList();
        }
    }
}