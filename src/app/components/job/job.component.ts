import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Job, JobService } from '../../services/jobs/job.service';
import { SkillsService } from '../../services/jobs/skills.service';

@Component({
  selector: 'app-jobs',
  templateUrl:'./job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobsComponent implements OnInit {
  jobDetails: Job[] = [];
  selectedJob: Job | null = null;
  allSkills: string[] = [];  

  filteredJobs = [...this.jobDetails];
  searchQuery = '';

  
  constructor(
    private jobService: JobService,
    private skillsService: SkillsService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.fetchJobsFromService();
    this.fetchSkills();  
  }

  fetchJobsFromService() {
    this.jobService.getJob().subscribe({
      next: (res: Job[]) => {
        this.jobDetails = res;
        this.selectedJob = res.length ? res[0] : null;
      },
      error: () => {
        this.toastr.error('Failed to load job listings', 'Error');
      }
    });
  }

  fetchSkills() {
    this.skillsService.getSkills().subscribe({
      next: (res: string[]) => {
        this.allSkills = res;
      },
      error: () => {
        this.toastr.error('Failed to load skills', 'Error');
      }
    });
  }

  selectJob(job: Job) {
    this.selectedJob = job;
  }

  onSearch() {
    const query = this.searchQuery.toLowerCase().trim();
    if (query) {
      this.filteredJobs = this.jobDetails.filter(job =>
        job.jobTitle.toLowerCase().includes(query) ||
        job.companyName.toLowerCase().includes(query)||
        job.jobDescription.toLowerCase().includes(query) ||
        job.jobLocation.toLowerCase().includes(query) 
      );
      this.selectedJob = this.filteredJobs.length ? this.filteredJobs[0] : null;
    } else {
      this.filteredJobs = [];
      this.selectedJob = null;
    }
  }
}
