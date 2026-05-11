using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Suchak.Core.Entities;

namespace Suchak.Core.Interfaces
{
    public interface ITaskRepository
    {
        Task<TaskItem> GetByIdAsync(int id);
        Task<List<TaskItem>> GetByUserIdAsync(int userId);
        Task<List<TaskItem>> GetAllAsync();
        Task AddAsync(TaskItem item);
        void Update(TaskItem item);
        void Delete(TaskItem item);

    }
}
