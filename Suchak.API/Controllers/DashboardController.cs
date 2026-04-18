using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Suchak.Core.Interfaces;
using System.Security.Claims;

namespace Suchak.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class DashboardController:BaseController
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
        //private int GetUserId()
        //{
        //    var claim = User.FindFirst("id") ?? User.FindFirst(ClaimTypes.NameIdentifier);


        //    if (claim == null)
        //        throw new Exception("Invalid token");

        //    return int.Parse(claim.Value);
        //}
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
            var tasks = await _taskService.GetUserTasksAsync(userId);
            var result = _dashboardService.GetWeeklyReports(tasks);
            return Ok(result);
        }
    }
}
