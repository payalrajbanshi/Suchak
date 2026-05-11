using Microsoft.AspNetCore.Mvc;
using Suchak.Core.Entities;
using System.Security.Claims;

namespace Suchak.API.Controllers
{
    public class BaseController : ControllerBase
    {
        protected int GetUserId()
        {
            //var claim = User.FindFirst("id")
            //         ?? User.FindFirst(ClaimTypes.NameIdentifier);
            var claim = User.FindFirst(ClaimTypes.NameIdentifier);

            if (claim == null)
                throw new Exception("Invalid token");

            return int.Parse(claim.Value);
        }
    }
}
