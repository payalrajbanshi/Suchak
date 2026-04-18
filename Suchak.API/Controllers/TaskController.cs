using Microsoft.AspNetCore.Authorization;

using Microsoft.AspNetCore.Mvc;
using Suchak.Core.DTOs;
using Suchak.Core.DTOs.Tasks;
using Suchak.Core.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using Status = Suchak.Core.Entities.TaskStatus;
namespace Suchak.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class TasksController: BaseController
    {
        private readonly ITaskService _taskService;
        public TasksController(ITaskService taskService)
        {
            _taskService = taskService;
        }
        //private int GetUserId()
        //{
        //    var claim = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier);
        //    if (claim == null)
        //        throw new System.Exception("Invalid token");
        //    return int.Parse(claim.Value);
        //}
        [HttpPost]
        public async Task<IActionResult> Create(CreateTaskDTO dto)
            
        {
            var userId = GetUserId();
            var id = await _taskService.CreateTaskAsync(userId, dto);
            return Ok(new { taskId = id });
        }
        [HttpGet]
        public async Task<IActionResult> GetTasks()
        {
            var userId = GetUserId();
            var tasks = await _taskService.GetUserTasksAsync(userId);
            return Ok(tasks);

        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, UpdateTaskDTO dto)
        {
            dto.Id = id;
            await _taskService.UpdateTaskAsync(dto);
            return Ok("updated");
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _taskService.DeleteTaskAsync(id);
            return Ok("Task deleted");
        }
        [HttpPost("reorder")]
        public async Task<IActionResult> Reorder(List<ReoderTaskDTO> dto)
        {
            await _taskService.ReorderTaskAsync(dto);
            return Ok("Reodered");
        }
        [HttpPost("toggle/{id}")]
        public async Task<IActionResult> Toggle(int id)
        {
            await _taskService.ToggleCompleteAsync(id);
            return Ok("toggled");
        }
        [HttpGet("smart")]
        public async Task<IActionResult> GetSmartTasks()
        {
            var userId = GetUserId();
            var result = await _taskService.GetSmartSuggestionsAsync(userId);
            return Ok(result);
        }

        [HttpGet("balanced")]
        public async Task<IActionResult> GetBalancedPlan()
        {
            var userId = GetUserId();
            var result = await _taskService.GetBalancedPlansAsync(userId);
            return Ok(result);
        }

        [HttpPut("status/{id}")]
        public async Task<IActionResult> UpdateStatus(int id, [FromBody] Status status)
        {
            await _taskService.UpdateStatusAsync(id, status);
            return Ok();
        }
    }
}
