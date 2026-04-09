using Microsoft.AspNetCore.Authorization;

using Microsoft.AspNetCore.Mvc;
using Suchak.Core.DTOs;
using Suchak.Core.DTOs.Tasks;
using Suchak.Core.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace Suchak.API.Controllers
{
    [ApiController]
    [Route("api/[controller")]
    [Authorize]
    public class TaskController: ControllerBase
    {
        private readonly ITaskService _taskService;
        public TaskController(ITaskService taskService)
        {
            _taskService = taskService;
        }
        private int GetUserId()
        {
            var claim = User.FindFirst("id");
            if (claim == null)
                throw new System.Exception("Invalid token");
            return int.Parse(claim.Value);
        }
        [HttpPost]
        public async Task<IActionResult> Create(CreateTaskDTO dto)
            
        {
            var userId = GetUserId();
            var id = await _taskService.CreateTaskAsync(userId, dto);
            return Ok(new { taskId = id });
        }
        [HttpGet("{userId}")]
        public async Task<IActionResult> GetTasks()
        {
            var userId = GetUserId();
            var tasks = await _taskService.GetUserTasksAsync(userId);
            return Ok(tasks);

        }
        [HttpPut]
        public async Task<IActionResult> Update(UpdateTaskDTO dto)
        {
            await _taskService.UpdateTaskAsync(dto);
            return Ok("updated");
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _taskService.DeleteTaskAsync(id);
            return Ok("User deleted");
        }
        [HttpPost("reoder")]
        public async Task<IActionResult> Reorder(List<ReoderTaskDTO> dto)
        {
            await _taskService.ReorderTaskAsync(dto);
            return Ok("Reodered");
        }


    }
}
