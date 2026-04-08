using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Suchak.Core.DTOs.Users;
using Suchak.Core.Entities;

namespace Suchak.Core.Interfaces
{
    public interface IUserService
    {
        Task<long> RegisterAsync(RegisterDTO dto);
        Task<string> LoginAsync(LoginDTO dto);
        Task<UserResponseDTO> GetUserProfileAsync(int userId);
    }
}
