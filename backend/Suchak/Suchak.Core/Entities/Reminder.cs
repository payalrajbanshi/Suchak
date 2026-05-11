using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Suchak.Core.Entities
{
    public class Reminder
    {
        public int Id { get; set; }
        public int TaskId { get; set; }
        public DateTime ReminderTime { get; set; }
        public bool IsSent { get; set; }
        public TaskItem Task { get; set; }
    }
}
