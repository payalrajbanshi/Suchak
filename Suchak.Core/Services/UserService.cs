using Suchak.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using Suchak.Core.Entities;
using Suchak.Core.DTOs;
using Suchak.Core.DTOs.Users;


namespace Suchak.Core.Services
{
    public class UserService: IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IAuthService _authService;
        public UserService(IUserRepository userRepository, IAuthService authService)
        {
            _userRepository = userRepository;
            _authService =authService;
        }
        public async Task<long> RegisterAsync(RegisterDTO dto)
        {
            var existing = await _userRepository.GetByEmailAsync(dto.Email);
            if (existing != null)
            {
                throw new ApplicationException("Email already exits");
            }
                var user = new User
                {
                    Name = dto.Name,
                    Email = dto.Email,
                    PasswordHash = _authService.HashPassword(dto.Password),
                    Category = dto.Category,
                    CreatedAt=DateTime.Now

                };

                await _userRepository.AddAsync(user);
                return user.Id;
            }
            
        
        public async Task<string> LoginAsync(LoginDTO dto)
        {
            var user = await _userRepository.GetByEmailAsync(dto.Email);
            if(user==null || !_authService.VerifyPassword(dto.Password,user.PasswordHash))
            {
                throw new ApplicationException("Invalid email or password");
            }
            return _authService.GenerateToken(user);
        }

        public async Task<UserResponseDTO> GetUserProfileAsync(int userId)
        {
            var user= await _userRepository.GetByIdAsync(userId);
            if (user == null)
                throw new ApplicationException("User not found");
            return new UserResponseDTO
            {
                Id = user.Id,
                Name = user.Name,
                Email = user.Email,
                Category = user.Category
            };
        }
    }
}
