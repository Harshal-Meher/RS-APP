import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from '../../../services/candidates/candidate.service';

@Component({
  selector: 'app-interviewed-candidate',
  templateUrl: './interviewed-candidate.component.html',
  styleUrls: ['./interviewed-candidate.component.scss']
})
export class InterviewedCandidateComponent implements OnInit {
  candidateId: number = 0;
  // candidateName: string = '';
  // candidateEmail: string = '';
  candidateDetails: any [] = [];

  rounds = ['Personal Interview', 'Technical Interview', 'Practical Interview', 'HR Round'];
  interviewForms: FormGroup[] = [];
  isRejected = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private candidateService: CandidateService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.candidateId = +idParam;
        this.getCandidateDetailsById(this.candidateId);
      }
    });

    // Initialize stepper forms
    this.interviewForms = this.rounds.map(() =>
      this.fb.group({
        status: ['', Validators.required],
        feedback: ['']
      })
    );
  }

  getCandidateDetailsById(id: number): void {
    // this.candidateService.getCandidateDetails().subscribe((data: any[]) => {
    //   const foundCandidate = data.find(item => item.id === id);
    //   if (foundCandidate) {
    //     this.candidateDetails = foundCandidate;
    //     this.candidateName = `${foundCandidate.firstName} ${foundCandidate.lastName}`;
    //     this.candidateEmail = foundCandidate.email;
    //     // add more fields as needed
    //   }
    // });
    this.candidateService.getCandidateDetails().subscribe((res => {
        this.candidateDetails = res;
    }))
  }


  onStatusChange(index: number): void {
    const status = this.interviewForms[index].get('status')?.value;

    if (status === 'Not Clear') {
      this.isRejected = true;

      for (let i = index + 1; i < this.interviewForms.length; i++) {
        this.interviewForms[i].reset();
      }
    } else {
      this.isRejected = false;
    }
  }

  isStepDisabled(index: number): boolean {
    if (index === 0) return false;

    const prevStatus = this.interviewForms[index - 1].get('status')?.value;
    return prevStatus !== 'Clear';
  }
}
