using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Suchak.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Suchak.Infrastructure.Data.Configurations
{
    public class UserConfiguration: IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("users");
            builder.HasKey(u => u.Id);
            builder.Property(u => u.Id)
                .HasColumnName("id");
            builder.Property(u => u.Name)
                .IsRequired()
                .HasMaxLength(100)
                .HasColumnName("name");
            builder.Property(u => u.Email)
                .IsRequired()
                .HasMaxLength(150)
                .HasColumnName("email");
            builder.Property(u => u.PasswordHash)
                .IsRequired()
                .HasMaxLength(255)
                .HasColumnName("password");
            builder.Property(u => u.Category)
                .HasMaxLength(255)
                .HasColumnName("category");
            builder.Property(u => u.ThemeMode)
                .HasMaxLength(20)
                .HasColumnName("theme_mode");
            builder.Property(u => u.PrimaryColor)
                .HasMaxLength(20)
                .HasColumnName("primary_color");
            builder.Property(u => u.BackgroundImageUrl)
                .HasColumnType("NVARCHAR(MAX)")
                .HasColumnName("background_image_url");
            builder.Property(u => u.CreatedAt)
                .HasDefaultValueSql("GETDATE()")
                .HasColumnName("created_at");

            builder.HasMany(u => u.Tasks)
                .WithOne(t => t.User)
                .HasForeignKey(t => t.UserId)
                .OnDelete(DeleteBehavior.Cascade);


               
        }
    }
}
