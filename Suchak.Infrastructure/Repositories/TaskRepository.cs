using Suchak.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Suchak.Core.Entities;
using Suchak.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Suchak.Infrastructure.Repositories
{
    public class TaskRepository :ITaskRepository
    {
        private readonly AppDbContext _context;
        public TaskRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task<TaskItem> GetByIdAsync(int id)
        {
            return await _context.TaskItems.FindAsync(id);
        }
        public async Task<List<TaskItem>> GetByUserIdAsync(int userId)
        {
            return await _context.TaskItems.Where(t => t.UserId == userId).
                ToListAsync();
        }
        public async Task<List<TaskItem>> GetAllAsync()
        {
            return await _context.TaskItems.ToListAsync();
        }
        public async Task AddAsync(TaskItem item)
        {
             _context.TaskItems.Add(item);
        }
        public void Update(TaskItem item)
        {
            _context.TaskItems.Update(item);
        }
        public void Delete(TaskItem item)
        {
            _context.TaskItems.Remove(item);
        }

    }
}
