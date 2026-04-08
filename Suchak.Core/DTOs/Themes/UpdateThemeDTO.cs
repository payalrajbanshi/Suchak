using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Suchak.Core.DTOs.Themes
{
    public  class UpdateThemeDTO
    {
        public string ThemeMode { get; set; }
        public string  PrimaryColor { get; set; }
        public string BackgroundImageUrl { get; set; }
    }
}
