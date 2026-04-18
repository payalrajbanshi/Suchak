using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Suchak.Core.DTOs.Tasks
{
    public class TaskResponseDTO
    {
        public int Id { get; set; }

        public string Title { get; set; }
        public string Description { get; set; }

        public DateTime Deadline { get; set; }
        public int EstimatedHours { get; set; }

        public int Priority { get; set; }
        public DateTime CreatedAt { get; set; }
        public bool IsCompleted { get; set; }
        public double CompletedHours { get; set; }
        public int Order { get; set; }
        public Suchak.Core.Entities.TaskStatus Status { get; set; }
    }
}
