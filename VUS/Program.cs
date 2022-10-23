using Microsoft.EntityFrameworkCore;
using VUS.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//builder.Services.AddDbContext<StudentsAPI>(options => options.UseInMemoryDatabase("StudentsDb"));
builder.Services.AddDbContext<StudentsAPI>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("StudentsApiConnectionString")));
//builder.Services.AddDbContext<TheachersAPI>(options => options.UseInMemoryDatabase("TheachersDb"));
builder.Services.AddDbContext<TheachersAPI>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("TheachersApiConnectionString")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

//cors
app.UseCors(builder => builder.AllowAnyOrigin());

app.Run();
