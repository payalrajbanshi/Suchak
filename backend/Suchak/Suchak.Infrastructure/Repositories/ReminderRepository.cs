using Suchak.Core.Interfaces;
using Suchak.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Suchak.Core.Entities;
using Microsoft.EntityFrameworkCore;
namespace Suchak.Infrastructure.Repositories
{
    public class ReminderRepository: IReminderRepository
    {
        private readonly AppDbContext _context;
        public ReminderRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task AddAsync(Reminder reminder)
        {
             await _context.Reminders.AddAsync(reminder);
        }
        public async Task<List<Reminder>> GetPendingReminderAsync()
        {
            return await _context.Reminders.
                Where(r => !r.IsSent && r.ReminderTime <= DateTime.Now)
                .ToListAsync();

        }

    }
}
