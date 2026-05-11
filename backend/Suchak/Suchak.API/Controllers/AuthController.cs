using Microsoft.AspNetCore.Mvc;
using Suchak.Core.DTOs;
using Suchak.Core.DTOs.Users;
using Suchak.Core.Interfaces;
using Suchak.Core.Entities;

namespace Suchak.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController: ControllerBase
    {
        private readonly IUserService _userService;
        public AuthController(IUserService userService)
        {
            _userService = userService;
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDTO dto)
        {
            var userId = await _userService.RegisterAsync(dto);
            return Ok(new { message = "User registered", userId });
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login (LoginDTO dto)
        {
            var token = await _userService.LoginAsync(dto);
            return Ok(new { token });
        }
    }
}
