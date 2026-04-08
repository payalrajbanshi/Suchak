using Suchak.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Suchak.Core.Interfaces
{
    public interface IReminderRepository
    {
        Task AddAsync(Reminder reminder);
        Task<List<Reminder>> GetPendingReminderAsync();
    }
}
