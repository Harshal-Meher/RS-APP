import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private toast:ToastrService){
    // this.toast.info("WELCOME TO OPEN SOURCE PROFESSIONAL...");
    toast.currentlyActive
  }

photos = [
  {
    img: '/assets/Images/1_448675.png',
    title: 'Live Coding Session',
    description: 'Hands-on training with real-time projects in full-stack development.',
    meta: 'Updated 2 hours ago'
  },
  {
    img: '/assets/Images/2_9f62bb.png',
    title: 'Business Strategy Meet',
    description: 'Discussion on startup assistance and management solutions.',
    meta: 'Updated 1 day ago'
  },
  {
    img: '/assets/Images/3_3ee7ac.png',
    title: 'Microsoft Azure Hackathon',
    description: 'Participation in Microsoft-hosted DevCamp showcasing cloud skills.',
    meta: 'Updated 3 days ago'
  },
  {
    img: '/assets/Images/4_e63126.png',
    title: 'Technical Seminar',
    description: 'Educating students on the latest trends in software engineering.',
    meta: 'Updated 5 hours ago'
  }
];

}
