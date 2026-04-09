using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Suchak.Core.DTOs.Tasks
{
    public class CreateTaskDTO
    {
        public string Title { get; set; }
        public string Description { get; set; }

        public DateTime Deadline { get; set; }
        public int EstimatedHours { get; set; }

        public string Priority { get; set; }
    }
}

