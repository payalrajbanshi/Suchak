using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Suchak.Core.Entities;
using Suchak.Core.DTOs;
using Suchak.Core.DTOs.Dashboard;
using Suchak.Core.DTOs.Tasks;
namespace Suchak.Core.Interfaces
{
    public interface IDashboardService
    {
        //int GetTotalTask(List<TaskItem> tasks);
        //int GetCompletedTask(List<TaskItem> tasks);
        //int GetPendingTask(List<TaskItem> tasks);
        DashboardDTO GetSummary(List<TaskResponseDTO> tasks);
        List<WeeklyReportDTO> GetWeeklyReports(List<TaskResponseDTO> tasks);
    }
}
