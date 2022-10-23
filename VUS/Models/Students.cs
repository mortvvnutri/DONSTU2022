namespace VUS.Models
{
    public class Students
    {
        /// <summary>
        /// internal string Discipline;
        /// </summary>

        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Patronymic { get; set; }  
        public string Group { get; set; }
        public string Facult { get; set; }
        
    }
}
