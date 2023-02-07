using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment4.Models
{
    public class GradeCalculatorModel
    {
        [Required]
        [Range(0, 100, ErrorMessage = "Assignment must be between 0 and 100")]
        public int Assignment { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Group must be between 0 and 100")]
        public int Group { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Quiz must be between 0 and 100")]
        public int Quiz { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Midterm must be between 0 and 100")]
        public int Midterm { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Final must be between 0 and 100")]
        public int Final { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Intex must be between 0 and 100")]
        public int Intex { get; set; }

    }
}
