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
    public class TaskProgressRepository: ITaskProgressRepository
    {
        private readonly AppDbContext _context;
        public TaskProgressRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task AddAsync(TaskProgress progres)
        {
            await _context.TaskProgresses.AddAsync(progres);
        }
        public async Task<List<TaskProgress>> GetByIdAsync(int taskId)
        {
            return await _context.TaskProgresses.Where(tp => tp.TaskId == taskId)
                .ToListAsync();
        }
        public async Task<List<TaskProgress>> GetByUserIdAsync(int userId)
        {
            return await _context.TaskProgresses
                .Where(p => _context.TaskItems
                    .Any(t => t.Id == p.TaskId && t.UserId == userId))
                .ToListAsync();
        }
        public async Task<List<TaskProgress>> GetByDateRangeAsync(DateTime start, DateTime end)
        {
            return await _context.TaskProgresses.Where(p => p.Date >= start && p.Date <= end)
                .ToListAsync();
        }
        
    }
}
