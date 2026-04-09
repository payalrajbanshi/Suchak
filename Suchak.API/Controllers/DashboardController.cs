using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Suchak.Core.Interfaces;

namespace Suchak.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class DashboardController:ControllerBase
    {
        private readonly IDashboardService _dashboardService;
        private readonly ITaskService _taskService;
        private readonly ITaskProgressRepository _taskProgressRepository;
        public DashboardController(IDashboardService dashboardService, ITaskService taskService, ITaskProgressRepository taskProgressRepository)
        {
            _dashboardService = dashboardService;
            _taskService = taskService;
            _taskProgressRepository = taskProgressRepository;
        }
        private int GetUserId()
        {
            var claim = User.FindFirst("id");

            if (claim == null)
                throw new System.Exception("Invalid token");

            return int.Parse(claim.Value);
        }
        [HttpGet("summary")]
        public async Task<IActionResult> GetSummary()
        {
            var userId = GetUserId();
            var tasks = await _taskService.GetUserTasksAsync(userId);
            var result = _dashboardService.GetSummary(tasks);
            return Ok(result);
        }

        [HttpGet("weekly-report")]
        public async Task<IActionResult> GetWeeklyReport()
        {
            var userId = GetUserId();
            var progress = await _taskProgressRepository.GetByUserIdAsync(userId);
            var result = _dashboardService.GetWeeklyReports(progress);
            return Ok(result);
        }
    }
}
