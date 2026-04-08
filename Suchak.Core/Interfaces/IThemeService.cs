using Suchak.Core.DTOs.Themes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Suchak.Core.Interfaces
{
    public interface IThemeService
    {
        Task UpdateThemeAsync(int userId, UpdateThemeDTO dto);
    }
}
