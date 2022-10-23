using Microsoft.EntityFrameworkCore;
using VUS.Models;

namespace VUS.Data
{
    public class TheachersAPI : DbContext
    {
        public TheachersAPI(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Theachers> Theachers { get; set; }
    }
}
