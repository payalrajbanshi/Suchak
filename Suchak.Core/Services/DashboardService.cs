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

        //public Dictionary<string, int> GetWeeklyReport(List<TaskProgress> progress)
        //{
        //    return progress
        //        .GroupBy(p => p.Date.DayOfWeek.ToString())
        //        .ToDictionary( 
        //        g => g.Key,
        //        g => g.Count(p => p.IsCompleted
        //        ));
        //}
        
        public List<WeeklyReportDTO> GetWeeklyReports(List<TaskProgress> progress)
        {
            return progress.GroupBy(p => p.Date.DayOfWeek.ToString())
                .Select(g => new WeeklyReportDTO
                {
                    Day = g.Key,
                    TasksCompleted = g.Count(x => x.IsCompleted)

                }).ToList();
        }
    }
}
