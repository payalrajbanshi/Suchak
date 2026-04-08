using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Suchak.Core.Entities;

namespace Suchak.Infrastructure.Data.Configurations
{
    public class ReminderConfiguration : IEntityTypeConfiguration<Reminder>
    {
        public void Configure(EntityTypeBuilder<Reminder> builder)
        {
            builder.ToTable("reminders");
            builder.HasKey(r => r.Id);
            builder.Property(r => r.Id)
                .HasColumnName("id");
            builder.Property(r => r.TaskId)
                .IsRequired()
                .HasColumnName("task_id");
            builder.Property(r => r.ReminderTime)
                .IsRequired()
                .HasColumnName("reminder_time");
            builder.Property(r => r.IsSent)
                .HasDefaultValue(false)
                .HasColumnName("is_sent");

            builder.HasOne(r => r.Task)
                .WithMany()
                .HasForeignKey(r => r.TaskId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
