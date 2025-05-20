import { Component } from '@angular/core';
import { JobService } from '../../../services/jobs/job.service';
@Component({
  selector: 'app-profile-recommendations',
  templateUrl: './profile-recommendations.component.html',
  styleUrl: './profile-recommendations.component.scss'
})
export class ProfileRecommendationsComponent {
  jobData:any[] = [];
  constructor(private jobS:JobService){
    this.getJobDetails();
  }

  getJobDetails(){
    this.jobS.getJob().subscribe(
      (res) => {
        this.jobData = res;
        console.log(this.jobData)
      }
    )
  }
}
