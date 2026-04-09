
using Microsoft.EntityFrameworkCore;
using Suchak.Infrastructure.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Suchak.Core.Interfaces;
using Suchak.Infrastructure.Services;
using Suchak.Core.Services;
using Suchak.Infrastructure.Repositories;
using System.Reflection;


var builder = WebApplication.CreateBuilder(args);
            var key = Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]);
            builder.Services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

            })
                .AddJwtBearer(options =>
                {
                    options.RequireHttpsMetadata = false;
                    options.SaveToken = true;
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = builder.Configuration["Jwt:Issuer"],
                        ValidAudience = builder.Configuration["Jwt:Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(key)
                    };
                });

            // Add services to the container.

            builder.Services.AddControllers();
           
          

            builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
            builder.Services.AddScoped<IAuthService, AuthService>();
            builder.Services.AddScoped<IUserService, UserService>();
            builder.Services.AddScoped<IDashboardService, DashboardService>();
            builder.Services.AddScoped<IThemeService, ThemeService>();
            builder.Services.AddScoped<ITaskService, TaskService>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<ITaskProgressRepository, TaskProgressRepository>();
builder.Services.AddScoped<ITaskRepository, TaskRepository>();
builder.Services.AddScoped<IReminderRepository, ReminderRepository>();

builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
//builder.Services.AddOpenApi();
WebApplication app;
try
{
     app = builder.Build();
}
catch(ReflectionTypeLoadException ex)
{
    Console.WriteLine("=== Loader Exceptions ===");
    foreach(var e in ex.LoaderExceptions)
    {
        Console.WriteLine(e.Message);

    }
    throw;
}



if (app.Environment.IsDevelopment())
            {
    app.UseSwagger();
    app.UseSwaggerUI();
               // app.MapOpenApi();
            }

            app.UseHttpsRedirection();
            app.UseAuthentication();
            app.UseAuthorization();


            app.MapControllers();

            app.Run();


