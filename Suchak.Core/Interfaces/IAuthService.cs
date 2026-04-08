using Suchak.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Suchak.Core.Interfaces
{
    public interface IAuthService
    {
        string GenerateToken(User user);
        string HashPassword(string password);
        bool VerifyPassword(string password, string storedHash);
    }
}
