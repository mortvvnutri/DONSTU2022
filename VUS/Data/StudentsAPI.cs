using VUS.Models;
using Microsoft.EntityFrameworkCore;

namespace VUS.Data
{
    public class StudentsAPI : DbContext
    {
        public StudentsAPI(DbContextOptions<StudentsAPI> options) : base(options)
        {
        }

        public DbSet<Students> Students { get; set; }
    }
}
