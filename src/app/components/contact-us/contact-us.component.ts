import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
// import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ContactUsService } from '../../services/contact/contact.service';

@Component({
  standalone: true,
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  imports: [
    ReactiveFormsModule,
    // NgxUiLoaderModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class ContactUsComponent implements OnInit {
  contactUsForm!: FormGroup;
  isSubmitting: boolean = false;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private contactUsService: ContactUsService) {}

  ngOnInit(): void {
    this.contactUsForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      enquiry: ['', Validators.required],
      enquiryDetails: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (!this.contactUsForm.valid) {
       console.log('Form is invalid');
      return;
    }

    const contactDetails = this.contactUsForm.value;
    this.isLoading = true;

    this.contactUsService.addContactUs(contactDetails).subscribe(

      (response) => {
        console.log('Contact submission successful: ', response);
        this.contactUsForm.reset();
        this.isLoading = false;
      },
      (error) => {
        console.error('Error submitting contact: ', error);
        this.isLoading = false;
      }
    );
  }
  onReset(): void {
    this.contactUsForm.reset();
  }
}
