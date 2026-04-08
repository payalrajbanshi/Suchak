using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Suchak.Core.DTOs.Themes;
using Suchak.Core.Entities;
using Suchak.Core.Interfaces;

namespace Suchak.Core.Services
{
    public class ThemeService: IThemeService
    {
        private readonly IUserRepository _userRepository;
        public ThemeService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
       public async  Task UpdateThemeAsync(int userId,UpdateThemeDTO dto)
        {
            var user = await _userRepository.GetByIdAsync(userId);
            if (user == null)
                throw new Exception("user not found");
            if(!string.IsNullOrEmpty(dto.ThemeMode))
            user.ThemeMode = dto.ThemeMode;
            if(!string.IsNullOrEmpty(dto.PrimaryColor))
            user.PrimaryColor = dto.PrimaryColor;
            if(!string.IsNullOrEmpty(dto.BackgroundImageUrl))
            user.BackgroundImageUrl = dto.BackgroundImageUrl;
            _userRepository.Update(user);
        }
    }
}
