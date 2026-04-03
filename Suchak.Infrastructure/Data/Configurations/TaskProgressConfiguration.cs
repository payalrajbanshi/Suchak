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
    public class TaskProgressConfiguration: IEntityTypeConfiguration<TaskProgress>
        public void Configure(EntityTypeBuilder<TaskProgress>builder)

    {
        builder.ToTable("task_progress");
        builder.HasKey(tp => tp.Id);
        builder.Property(tp => tp.Id)
            .HasColumnName("id");

        builder.Property(tp => tp.TaskId)
            .IsRequired()
            .HasColumnName("task_id");
        builder.Property(tp => tp.Date)
            .IsRequired()
            .HasColumnName("date");
        builder.Property(tp => tp.IsCompleted)
            .HasDefaultValue(false)
            .HasColumnName("is_completed");

        builder.HasOne(tp => tp.Task)
            .WithMany(t => t.ProgressRecords)
            .HasForeignKey(tp => tp.TaskId)
            .OnDelete(DeleteBehavior.Cascade);



    }
}
