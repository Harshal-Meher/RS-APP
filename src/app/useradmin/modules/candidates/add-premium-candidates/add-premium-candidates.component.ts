import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { map, startWith } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CandidateService } from '../../../services/candidates/candidate.service';

@Component({
  selector: 'app-add-premium-candidates',
  templateUrl: './add-premium-candidates.component.html',
  styleUrls: ['./add-premium-candidates.component.scss']
})
export class AddPremiumCandidatesComponent implements OnInit {
  employerForm!: FormGroup;
  employers: string[] = ['TCS', 'Infosys', 'Wipro', 'HCL', 'Accenture'];
  filteredEmployers: string[] = [];

  constructor(
    private fb: FormBuilder,
    private candidateService: CandidateService,
    private toastMsg: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.employerForm = this.fb.group({
      employerName: ['', [Validators.required, Validators.minLength(2)]],
      candidateName: ['', [Validators.required, Validators.minLength(2)]],
      candidateEmail: ['', [Validators.required, Validators.email]],
      candidatePhone: ['', [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/)
      ]],
      candidateRole: ['', Validators.required],
      experience: ['', [Validators.required, Validators.min(0), Validators.max(50)]],
      location: ['', Validators.required],
      selectedPackage: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      status: ['', Validators.required]
    }, { validators: [this.dateRangeValidator] });

    this.employerForm.get('employerName')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterEmployers(value))
      )
      .subscribe(filtered => this.filteredEmployers = filtered);
  }

  private filterEmployers(value: string): string[] {
    const filterValue = value?.toLowerCase() || '';
    return this.employers.filter(emp => emp.toLowerCase().includes(filterValue));
  }

  private dateRangeValidator(group: AbstractControl): ValidationErrors | null {
    const start = group.get('startDate')?.value;
    const end = group.get('endDate')?.value;

    if (start && end && new Date(start) > new Date(end)) {
      return { dateInvalid: true };
    }

    return null;
  }

  onSubmit() {
    if (this.employerForm.invalid) {
      this.toastMsg.error('Please fill all required fields correctly.');
      return;
    }

    const formData = this.employerForm.value;

    this.candidateService.addPremiumCandidateDetails(formData).subscribe((res)=>{
    this.toastMsg.success('Premium Candidate added successfully!');
        // this.employerForm.reset();
        console.log(res)
        setTimeout(() => {
          this.router.navigate(['/useradmin/mainpanel/premium-candidates/view-premium-candidate']);
        }, 2000);

      
    });
  }
}


// // import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
// import { map, startWith } from 'rxjs';
// import { CandidateService } from '../../../services/candidate.service';
// import { ToastrService } from 'ngx-toastr';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-add-premium-candidates',
//   templateUrl: './add-premium-candidates.component.html',
//   styleUrls: ['./add-premium-candidates.component.scss']
// })
// export class AddPremiumCandidatesComponent implements OnInit {
//   employerForm!: FormGroup;
//   employers: string[] = ['TCS', 'Infosys', 'Wipro', 'HCL', 'Accenture'];
//   filteredEmployers: string[] = [];

//   constructor(
//     private fb: FormBuilder,
//     private candidateService: CandidateService,
//     private toastMsg: ToastrService,
//     private router: Router
//   ) {}

//   ngOnInit() {
//     this.employerForm = this.fb.group({
//       employerName: ['', Validators.required],
//       candidateName: ['', Validators.required],
//       candidateEmail: ['', [Validators.required, Validators.email]],
//       candidatePhone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
//       candidateRole: ['', Validators.required],
//       experience: ['', [Validators.required, Validators.min(0), Validators.max(50)]],
//       location: ['', Validators.required],
//       selectedPackage: ['', Validators.required],
//       startDate: ['', Validators.required],
//       endDate: ['', Validators.required],
//       status: ['active', Validators.required] // Default as string
//     }, { validators: [this.dateRangeValidator] });

//     this.employerForm.get('employerName')!.valueChanges
//       .pipe(startWith(''), map(value => this.filterEmployers(value)))
//       .subscribe(filtered => this.filteredEmployers = filtered);
//   }

//   private filterEmployers(value: string): string[] {
//     const filterValue = value.toLowerCase();
//     return this.employers.filter(emp => emp.toLowerCase().includes(filterValue));
//   }

//   private dateRangeValidator(group: AbstractControl): ValidationErrors | null {
//     const start = new Date(group.get('startDate')?.value);
//     const end = new Date(group.get('endDate')?.value);
//     if (start && end && start > end) {
//       return { dateInvalid: true };
//     }
//     return null;
//   }

//   onSubmit() {
//     if (this.employerForm.invalid) {
//       this.toastMsg.error('Please fix the errors before submitting.');
//       return;
//     }

//     const formData = this.employerForm.value;

//     this.candidateService.addPremiumCandidateDetails(formData).subscribe({
//       next: () => {
//         this.toastMsg.success('Premium Candidate added successfully!');
//         this.employerForm.reset();
//         setTimeout(() => {
//           this.router.navigate(['/useradmin/mainpanel/premium-candidates/view-premium-candidate']);
//         }, 1500);
//       },
//       error: () => {
//         this.toastMsg.error('Error saving candidate.');
//       }
//     });
//   }
// }
