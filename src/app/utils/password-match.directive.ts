import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appPasswordMatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordMatchDirective, multi: true }]
})

export class PasswordMatchDirective {

  // validate(control: AbstractControl): ValidationErrors | null 
  // {
  //   const password = control.get('password')?.value;
  //   const confirmPassword = control.get('confirmPassword')?.value;

  //   if (password === undefined || confirmPassword === undefined) {
  //     return null;
  //   }

  //   if (password !== confirmPassword) {
  //     return { 'passwordMismatch': true };
  //   }
  //   return null;
  // }

  passwordMatch(password: string, confirmPassword: string): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: any } | null => {
      const passwordControl = formGroup.get(password);
      const confirmPasswordControl = formGroup.get(confirmPassword);

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors['passwordMismatch']
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      } else {
        confirmPasswordControl.setErrors(null);
        return null;
      }
    };
}
}