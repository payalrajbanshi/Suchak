using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Suchak.Core.DTOs.Dashboard;
using Suchak.Core.DTOs.Tasks;
using Suchak.Core.Entities;
using Suchak.Core.Interfaces;
namespace Suchak.Core.Services
{
    public class DashboardService:IDashboardService
    {
       // public int GetTotalTask(List<TaskItem> tasks)
       // {
       //     return tasks.Count;
       // }
       // public int GetCompletedTask(List<TaskItem> tasks)
       // {
       //     return tasks.Count(t => t.IsCompleted);
       // }
       //public  int GetPendingTask(List<TaskItem> tasks)
       // {
       //     return tasks.Count(t => !t.IsCompleted);
       // }
       public DashboardDTO GetSummary(List<TaskResponseDTO> tasks)

        {
            return new DashboardDTO
            {
                TotalTasks = tasks.Count,
                CompletedTasks = tasks.Count(t => t.IsCompleted),
                PendingTasks = tasks.Count(t => !t.IsCompleted)
            };

            }

     
        
        public List<WeeklyReportDTO> GetWeeklyReports(List<TaskResponseDTO> tasks)
        {
            var last7days = Enumerable.Range(0, 7)
                .Select(i => DateTime.Now.Date.AddDays(-i))
                .Reverse()
                .ToList();
            return last7days.Select(day => new WeeklyReportDTO
            {
                Day = day.ToString("ddd"),
                TasksCompleted=tasks.Count(t=>
                //t.IsCompleted
                //&& 
                t.CreatedAt.Date==day
                )
            }).ToList();

        }
    }
}
