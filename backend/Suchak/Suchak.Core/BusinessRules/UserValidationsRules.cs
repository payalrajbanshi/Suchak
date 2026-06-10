using Suchak.Core.DTOs.Users;
using Suchak.Core.Entities;

namespace Suchak.Core.BusinessRules
{
    public class UserValidationRules
    {
        public void ValidateRegistration(
            RegisterDTO dto,
            User? existingUser)
        {
            if (existingUser != null)
            {
                throw new ApplicationException(
                    "Email already exists");
            }

            if (string.IsNullOrWhiteSpace(dto.Name))
            {
                throw new ApplicationException(
                    "Name is required");
            }

            if (string.IsNullOrWhiteSpace(dto.Email))
            {
                throw new ApplicationException(
                    "Email is required");
            }

            if (string.IsNullOrWhiteSpace(dto.Password))
            {
                throw new ApplicationException(
                    "Password is required");
            }

            if (dto.Password.Length < 6)
            {
                throw new ApplicationException(
                    "Password must be at least 6 characters");
            }
        }

        public void ValidateLogin(User? user)
        {
            if (user == null)
            {
                throw new ApplicationException(
                    "Invalid email or password");
            }
        }
    }
}