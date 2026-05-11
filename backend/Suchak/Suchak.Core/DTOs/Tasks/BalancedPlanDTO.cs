using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Suchak.Core.DTOs.Tasks
{
    public class BalancedPlanDTO
    {
        public int TaskId { get; set; }
        public string Title { get; set; }
        public double HoursToday { get; set; }
        public double RemainingHours { get; set; }
        public DateTime Deadline { get; set; }
    }
}
