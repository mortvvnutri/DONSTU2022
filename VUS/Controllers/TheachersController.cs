using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using VUS.Data;
using VUS.Models;

namespace VUS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TheachersController : Controller
    {
        private readonly TheachersAPI dbContext;

        public TheachersController(TheachersAPI dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetTheachers()
        {
            return Ok(await dbContext.Theachers.ToListAsync());
        }

        [HttpGet]
        [Route("{id:guid}")]
        public async Task<IActionResult> GetTheachers([FromRoute] Guid id)
        {
            var theachers = await dbContext.Theachers.FindAsync(id);

            if (theachers == null)
            {
                return NotFound();
            }

            return Ok(theachers);
        }

        [HttpPost]
        public async Task<IActionResult> AddTheachers(AddTheachersRequest addTheachersRequest)
        {
            var Theachers = new Theachers()
            {
                Id = Guid.NewGuid(),
                Name = addTheachersRequest.Name,
                Surname = addTheachersRequest.Surname,
                Patronymic = addTheachersRequest.Patronymic,
                Discipline = addTheachersRequest.Discipline,
                Facult = addTheachersRequest.Facult,
                //Schedule = addTheachersRequest.Schedule
            };

            await dbContext.Theachers.AddAsync(Theachers);
            await dbContext.SaveChangesAsync();

            return Ok(Theachers);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdateStudents([FromRoute] Guid id, UpdateTheachersRequest updateTheachersRequest)
        {
            var theachers = await dbContext.Theachers.FindAsync(id);

            if (theachers != null)
            {
                theachers.Name = updateTheachersRequest.Name;
                theachers.Surname = updateTheachersRequest.Surname;
                theachers.Patronymic = updateTheachersRequest.Patronymic;
                theachers.Discipline = updateTheachersRequest.Discipline;
                theachers.Facult = updateTheachersRequest.Facult;
                //theachers.Schedule = updateTheachersRequest.Schedule;

                await dbContext.SaveChangesAsync();

                return Ok(theachers);
            }

            return NotFound();
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteTheachers([FromRoute] Guid id)
        {
            var theachers = await dbContext.Theachers.FindAsync(id);

            if (theachers != null)
            {
                dbContext.Remove(theachers);
                await dbContext.SaveChangesAsync();
                return Ok(theachers);
            }

            return NotFound();
        }
    }
}
