import { AbstractControl, ValidationErrors } from "@angular/forms";

export const password2Validator = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const password2 = control.get('password2');  
    if (password && password2 && password.value !== password2.value) {
      return { passwordMismatch: true };
    }  
    return null;
}