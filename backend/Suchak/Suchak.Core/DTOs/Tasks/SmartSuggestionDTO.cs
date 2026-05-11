using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Suchak.Core.DTOs.Tasks
{
    public class SmartSuggestionDTO
    {
        public int TaskId { get; set; }
        public string Title { get; set; }
        public double HoursToDoToday { get; set; }
        public DateTime Deadline { get; set; }
        public string Warning { get; set; }
    }
}
