using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Suchak.Core.Entities
{
    public class TaskProgress
    {
        public int Id { get; set; }
        public int TaskId { get; set; }
        public DateTime Date { get; set; }
        public int HoursWorked { get; set; }
        public bool IsCompleted { get; set; }
        public TaskItem Task { get; set; }
    }
}
