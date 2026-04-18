using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Suchak.Core.Entities
{
    public class TaskItem
    {
        
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime Deadline { get; set; }
        public int EstimatedHours { get; set; }
        public int Priority { get; set; }
        public TaskStatus Status { get; set; }
        public bool IsCompleted { get; set; }
        public int Order { get; set; }
        public DateTime CreatedAt { get; set; }
        public double CompletedHours { get; set; }

        public User User { get; set; }
        public ICollection<TaskProgress> ProgressRecords { get; set; } = new List<TaskProgress>();

    }
}
