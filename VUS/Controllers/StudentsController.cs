using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using VUS.Data;
using VUS.Models;

namespace VUS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentsController : Controller
    {
        private readonly StudentsAPI dbContext;

        public StudentsController(StudentsAPI dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetStudents()
        {
            return Ok(await dbContext.Students.ToListAsync());
        }

        [HttpGet]
        [Route("{id:guid}")]
        public async Task<IActionResult> GetStudents([FromRoute] Guid id)
        {
            var students = await dbContext.Students.FindAsync(id);

            if (students == null)
            {
                return NotFound();
            }

            return Ok(students);
        }

        [HttpPost]
        public async Task<IActionResult> AddStudents(AddStudentsRequest addStudentsRequest)
        {
            var Students = new Students()
            {
                Id = Guid.NewGuid(),
                Name = addStudentsRequest.Name,
                Surname = addStudentsRequest.Surname,
                Patronymic = addStudentsRequest.Patronymic,
                Group = addStudentsRequest.Group,
                Facult = addStudentsRequest.Facult
            };

            await dbContext.Students.AddAsync(Students);
            await dbContext.SaveChangesAsync();

            return Ok(Students);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdateStudents([FromRoute] Guid id, UpdateStudentsRequest updateStudentsRequest)
        {
            var students = await dbContext.Students.FindAsync(id);

            if (students != null)
            {
                students.Name = updateStudentsRequest.Name;
                students.Surname = updateStudentsRequest.Surname;
                students.Patronymic = updateStudentsRequest.Patronymic;
                students.Group = updateStudentsRequest.Group;
                students.Facult = updateStudentsRequest.Facult;

                await dbContext.SaveChangesAsync();

                return Ok(students);
            }

            return NotFound();
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteStudents([FromRoute] Guid id)
        {
            var students = await dbContext.Students.FindAsync(id);

            if (students != null)
            {
                dbContext.Remove(students);
                await dbContext.SaveChangesAsync();
                return Ok(students);
            }

            return NotFound();
        }

        
    }
}
