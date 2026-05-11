using Suchak.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Suchak.Core.Interfaces
{
    public interface ITaskProgressRepository
    {
        Task AddAsync(TaskProgress progress);
        Task<List<TaskProgress>> GetByIdAsync(int taskId);
        Task<List<TaskProgress>> GetByUserIdAsync(int userId);
        Task<List<TaskProgress>> GetByDateRangeAsync(DateTime start, DateTime end);
    }
}
