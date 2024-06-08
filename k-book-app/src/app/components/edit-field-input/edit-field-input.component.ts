import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-field-input',
  templateUrl: './edit-field-input.component.html',
  styleUrl: './edit-field-input.component.css'
})
export class EditFieldInputComponent {
  @Input() label!: string;
    @Input() type!: string ; 
}
