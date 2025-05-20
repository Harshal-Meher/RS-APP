import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, startWith, map } from 'rxjs';
import { UserAuthService } from '../../services/auth/user-auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUp!: FormGroup;
  isLoading: boolean = false;

  // Form controls for autocomplete
  countryControl = new FormControl('', [Validators.required]);
  stateControl = new FormControl('', [Validators.required]);
  cityControl = new FormControl('', [Validators.required]);
  batchTimeControl = new FormControl('', [Validators.required]);

  // Observables for filtered options
  filteredCountries!: Observable<string[]>;
  filteredStates!: Observable<string[]>;
  filteredCities!: Observable<string[]>;
  filteredBatchTimes!: Observable<string[]>;

  countries: string[] = [
    'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla',
    'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria',
    'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize',
    'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil',
    'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi',
    'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic',
    'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo (Congo-Brazzaville)', 'Congo (Congo-Kinshasa)',
    'Cook Islands', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti',
    'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea',
    'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France',
    'French Guiana', 'French Polynesia', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana',
    'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey',
    'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland',
    'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica',
    'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'North Korea', 'South Korea',
    'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya',
    'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macao', 'North Macedonia', 'Madagascar', 'Malawi',
    'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania',
    'Mauritius', 'Mayotte', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro',
    'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands',
    'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island',
    'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestinian Territories',
    'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands', 'Poland',
    'Portugal', 'Puerto Rico', 'Qatar', 'Réunion', 'Romania', 'Russia', 'Rwanda',
    'Saint Barthélemy', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin',
    'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino',
    'São Tomé and Príncipe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone',
    'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa',
    'South Georgia and the South Sandwich Islands', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan',
    'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan'
  ];

  states: string[] = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands',
    'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'
  ];

  cities: string[] = [
    'Amaravati', 'Visakhapatnam', 'Vijayawada', 'Kurnool', 'Guntur', 'Itanagar', 'Guwahati',
    'Dibrugarh', 'Jorhat', 'Silchar', 'Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Raipur',
    'Bilaspur', 'Durg', 'Korba', 'Panaji', 'Margao', 'Vasco da Gama', 'Ahmedabad', 'Surat',
    'Vadodara', 'Rajkot', 'Gandhinagar', 'Faridabad', 'Gurgaon', 'Ambala', 'Hisar', 'Shimla',
    'Manali', 'Dharamshala', 'Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Bangalore', 'Mysuru',
    'Mangalore', 'Hubli', 'Belagavi', 'Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Kollam',
    'Thrissur', 'Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain', 'Mumbai', 'Pune', 'Nagpur',
    'Nashik', 'Aurangabad', 'Imphal', 'Agra', 'Allahabad (Prayagraj)', 'Varanasi', 'Kanpur',
    'Lucknow', 'Bareilly', 'Meerut', 'Jaipur', 'Udaipur', 'Jodhpur', 'Ajmer', 'Madurai',
    'Coimbatore', 'Chennai', 'Hyderabad', 'Kolkata', 'Bhubaneswar', 'Patiala', 'Rourkela',
    'Chandrapur', 'Kolhapur', 'Shivamogga', 'Srinagar', 'Leh', 'Ludhiana', 'Dharamsala',
    'Pondicherry', 'Thane', 'Nagapattinam'
  ];

  branchNames: string[] = [
    'Pune - Wakad',
    'Mumbai - Andheri',
    'Bangalore - Whitefield',
    'Hyderabad - Hitech City',
    'Delhi - Connaught Place'
  ];

  batchTimes: string[] = [
    '9:00 AM - 11:00 AM',
    '11:30 AM - 1:30 PM',
    '2:00 PM - 4:00 PM',
    '5:00 PM - 7:00 PM'
  ];

  constructor(
    private router: Router,
    private userAuthService: UserAuthService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.signUp = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[^@]+@[^@]+\\.[^@]+$')
      ]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('[0-9]*')
      ]),
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('[a-zA-Z].*')
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z].*')
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9]).*$')
      ]),
      confirmpassword: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        this.matchPassword.bind(this)
      ]),
      branchname: new FormControl('', [Validators.required]),
      batchtime: this.batchTimeControl,
      country: this.countryControl,
      state: this.stateControl,
      city: this.cityControl,
      area: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        Validators.maxLength(30)
      ]),
      enquirydetail: new FormControl('', [
        Validators.required,
        Validators.maxLength(200)
      ]),
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required])
    });

    // Initialize filtered observables
    this.filteredCountries = this.countryControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', this.countries))
    );
    this.filteredStates = this.stateControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', this.states))
    );
    this.filteredCities = this.cityControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', this.cities))
    );
    this.filteredBatchTimes = this.batchTimeControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', this.batchTimes))
    );
  }

  private _filter(value: string, list: string[]): string[] {
    const filterValue = value.toLowerCase();
    return list.filter(option => option.toLowerCase().includes(filterValue));
  }

  matchPassword(control: FormControl): { [s: string]: boolean } | null {
    if (this.signUp && control.value !== this.signUp.get('password')?.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit(): void {
    this.isLoading = true;
    setTimeout(() => {
      if (this.signUp.valid) {
        const formData = { ...this.signUp.value };
        delete formData.confirmpassword;
        this.userAuthService.registerUser(formData);
        this.signUp.reset();
        this.isLoading = false;
        this.toast.success('Registration Successful', '', { timeOut: 3000 });
        this.router.navigate(['/sign-in']);
      } else {
        this.isLoading = false;
        this.toast.error('Please fill in all required fields correctly', '', { timeOut: 3000 });
      }
    }, 2000);
  }
}