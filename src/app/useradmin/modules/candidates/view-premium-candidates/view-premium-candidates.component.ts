import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../../services/candidates/candidate.service';

@Component({
  selector: 'app-view-premium-candidates',
  templateUrl:'./view-premium-candidates.component.html',
  styleUrls: ['./view-premium-candidates.component.scss']
})
export class ViewPremiumCandidatesComponent implements OnInit {
  premiumEmployers: any[] = [];
  allSentEmails: any[] = [];
searchBy: any;

  constructor(private candidateS: CandidateService) {}

  ngOnInit() {
    this.candidateS.getPremiumCandidateDetails().subscribe(data => {
      const today = new Date();
      this.premiumEmployers = data.map((employer: any) => {
        const startDate = new Date(employer.startDate);
        const daysElapsed = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
        if (daysElapsed > 30) {
          employer.status = 'inactive';
        }
        return employer;
      });
    });

    const savedEmails = localStorage.getItem('sentEmails');
    this.allSentEmails = savedEmails ? JSON.parse(savedEmails) : [];
  }

  sendInactiveEmail(email: string) {
    const emailContent = {
      to: email,
      subject: 'Employer Inactive Notice',
      body: `Candidate linked with your company has been marked as INACTIVE.`,
      sentAt: new Date().toLocaleString()
    };

    const emailBody = encodeURIComponent(`
Hi,

Your premium candidate package has expired.

Please renew your subscription here:
https://your-domain.com/renew

Regards,
Admin Team`);

    const mailLink = `mailto:${email}?subject=${encodeURIComponent(emailContent.subject)}&body=${emailBody}`;
    window.open(mailLink, '_blank');

    this.allSentEmails.push(emailContent);
    localStorage.setItem('sentEmails', JSON.stringify(this.allSentEmails));
  }
}
