import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillsService } from '../../../../../../services/jobs/skills.service';


@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrl: './add-skill.component.scss'
})
export class AddSkillComponent {
  skillForm!: FormGroup;

  isSubmitting = false;
  showSuccessMessage = false;

  constructor(private skillService:SkillsService, private router:Router){}
  
  ngOnInit(): void {
    this.skillForm = new FormGroup({
      skillSelect: new FormControl('', Validators.required),
      isActive: new FormControl(false, Validators.requiredTrue),
      skillLevel: new FormControl('', Validators.required),
      experienceYears: new FormControl('', [Validators.required, Validators.min(0)])
    });
  }

  skillsArr: string[] = [
    'C#', 'C', 'Java', 'Python', 'LINQ', 'Node.js', 'Assembly', 'XML', 'Json',
    'HTML5', 'CSS', 'SASS', 'PHP', 'JavaScript', '.NET', 'ASP.NET', '.NET Core',
    'Angular', 'React', 'Laravel', 'Express.js', 'Agile (Scrum)', 'TDD', 'BDD',
    'Unit Testing', 'Debugging', 'SQL', 'MySQL', 'MS SQL Server', 'Normalisation',
    'EF Core', 'Dapper ORM', 'AWS', 'Microsoft Azure', 'Kotlin', 'Visual Studio',
    'Visual Studio Code', 'Eclipse', 'Android Studio', 'Notepad++', 'UML', 'E-R',
    'Algorithms', 'Logic Prog. Graphs', 'Git', 'System penetration testing using Kali Linux',
    'Cyber vulnerabilities and attack prevention', 'MSF', 'IIS', 'Apache',
    'Virtual Machines', 'Wireshark', 'PuTTY', 'NetSim', 'Mininet', 'Windows',
    'Linux', 'Gantt Charts', 'Algebra', 'Geometry', 'Boolean Algebra', 'Statistics',
    'Excel', 'PowerPoint'
  ];


  submitSkills() {
    if (this.skillForm.invalid) {
      console.error('Form is invalid. Please fill all required fields correctly.');
      return;
    }

    const jobData = this.skillForm.value;

    this.isSubmitting = true;

    this.skillService.addSkill(jobData).subscribe(
      (response) => {
        console.log('Company Data Added Successfully:', response);

        setTimeout(() => {

          this.showSuccessMessage = true;
          setTimeout(() => {
            this.router.navigate(['useradmin/mainpanel/skills/view-skill']);
          }, 1000); 
        }, 3000); 
      }
    );
  }
}
