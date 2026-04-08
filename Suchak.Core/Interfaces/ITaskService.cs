using Suchak.Core.DTOs.Tasks;
using Suchak.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Suchak.Core.DTOs;

namespace Suchak.Core.Interfaces
{
    public interface ITaskService
    {
        Task<long> CreateTaskAsync(int userId, CreateTaskDTO dto);
        Task<List<TaskResponseDTO>> GetUserTasksAsync(int userId);
        Task UpdateTaskAsync(UpdateTaskDTO dto);
        Task DeleteTaskAsync(int taskId);
        double CalculateDailyWork(int estimatedHours, DateTime deadline);
        List<TaskResponseDTO> GetTodayPlan(List<TaskResponseDTO> tasks);
        Task ReorderTaskAsync(List<ReoderTaskDTO> tasks);
    }
}
