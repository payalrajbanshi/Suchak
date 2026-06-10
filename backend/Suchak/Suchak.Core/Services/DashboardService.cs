using Suchak.Core.BusinessRules;
using Suchak.Core.DTOs.Dashboard;
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
    public class DashboardService:IDashboardService
    {

        private readonly DashboardCalculator _dashboardCalculator;

        public DashboardService(DashboardCalculator dashboardCalculator)
        {
            _dashboardCalculator = dashboardCalculator;
        }

        public DashboardDTO GetSummary(List<TaskResponseDTO> tasks)
        {
            return _dashboardCalculator.GetSummary(tasks);
        }

        public List<WeeklyReportDTO> GetWeeklyReports(List<TaskResponseDTO> tasks)
        {
            return _dashboardCalculator.GetWeeklyReports(tasks);
        }



    }
}
