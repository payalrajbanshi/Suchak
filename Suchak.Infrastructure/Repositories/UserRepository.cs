using Suchak.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Suchak.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Suchak.Core.Interfaces;
using Suchak.Infrastructure.Data;

namespace Suchak.Infrastructure.Repositories
{
    public class UserRepository: IUserRepository
    {
        private readonly AppDbContext _context;
        public UserRepository(AppDbContext context)
        {
            _context = context;

        }
        public async Task<User> GetByIdAsync(int id)
        {
            return await _context.Users.FindAsync(id);
        }
        public async Task<User> GetByEmailAsync(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(x => x.Email == email);
        }
        public async Task AddAsync(User user)
        {
            await _context.Users.AddAsync(user);
        }
        public void Update(User user)
        {
            _context.Users.Update(user);
        }
    }
}
