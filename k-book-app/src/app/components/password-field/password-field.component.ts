import { Component, Input } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrl: './password-field.component.css'
})
export class PasswordFieldComponent {
  @Input() label!: string;
  @Input() control!: FormControl;
  
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
