using Azure.Core.Pipeline;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Suchak.Core.DTOs;
using Suchak.Core.DTOs.Themes;
using Suchak.Core.Interfaces;
using Suchak.Core.Entities;


namespace Suchak.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class ThemeController:ControllerBase{
        private readonly IThemeService _themeService;
        public ThemeController(IThemeService themeService)
        {
            _themeService = themeService;

        }
        [HttpPut]
        public async Task<IActionResult> UpdateTheme( UpdateThemeDTO dto)
        {
            var userIdClaim = User.FindFirst("id");
            if (userIdClaim == null)
                return Unauthorized("Invalid token");
            var userId = int.Parse(userIdClaim.Value);
            await _themeService.UpdateThemeAsync(userId,dto);
            return Ok("theme updated");
        }
    }
}
