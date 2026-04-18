using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Suchak.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskStatus = Suchak.Core.Entities.TaskStatus;
namespace Suchak.Infrastructure.Data.Configurations
{
    public class TaskItemConfiguration:IEntityTypeConfiguration<TaskItem>
    {
        public void Configure(EntityTypeBuilder<TaskItem> builder)
        {
            builder.ToTable("tasks");
            builder.HasKey(t => t.Id);
            builder.Property(t => t.Id)
                .HasColumnName("id");
            builder.Property(t => t.Title)
                .IsRequired()
                .HasMaxLength(200)
                .HasColumnName("title");
            builder.Property(t => t.Description)
                .HasColumnType("NVARCHAR(MAX)")
                .HasColumnName("description");
            builder.Property(t => t.Deadline)
                .IsRequired()
                .HasColumnName("deadline");
            builder.Property(t => t.EstimatedHours)
                .IsRequired()
                .HasColumnName("estimated_hours");
            builder.Property(t => t.Priority)
                .HasMaxLength(20)
                .HasColumnName("priority");
            builder.Property(t => t.Status)
                
                .HasDefaultValue(TaskStatus.Todo)
                .HasColumnName("status");
            builder.Property(t => t.IsCompleted)
                .HasDefaultValue(false)
                .HasColumnName("is_completed");
            builder.Property(t => t.Order)
                .HasDefaultValue(0)
                .HasColumnName("order_number");
            builder.Property(t => t.UserId)
                .IsRequired()
                .HasColumnName("user_id")
                .HasColumnType("int");
            builder.Property(t => t.CreatedAt)
                .HasDefaultValueSql("GETDATE()")
                .HasColumnName("created_at");
            builder.Property(t => t.CompletedHours)
                .HasDefaultValue(0)
                .HasColumnName("completed_hours");


            builder.HasOne(t => t.User)
                .WithMany(u => u.Tasks)
                .HasForeignKey(t => t.UserId)
                .OnDelete(DeleteBehavior.Cascade);
            builder.HasMany(t => t.ProgressRecords)
                .WithOne(p => p.Task)
                .HasForeignKey(p => p.TaskId)
                .OnDelete(DeleteBehavior.Cascade);

        }
    }
}
