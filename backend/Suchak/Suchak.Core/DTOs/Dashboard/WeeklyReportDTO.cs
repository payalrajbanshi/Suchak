using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Suchak.Core.DTOs.Dashboard
{
    public class WeeklyReportDTO
    {
        public string Day { get; set; }
        public int TasksCompleted { get; set; }
        //public int HoursWorked { get; set; }
    }
}
