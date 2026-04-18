using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Suchak.Core.DTOs.Tasks
{
    public  class ReminderDTO
    {
        public int TaskId { get; set; }
        public DateTime ReminderTime { get; set; }
    }
}
