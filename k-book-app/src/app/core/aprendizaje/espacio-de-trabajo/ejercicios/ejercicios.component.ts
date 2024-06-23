import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrl: './ejercicios.component.css'
})
export class EjerciciosComponent {
  isEnunciadoVisible: boolean = true;

  toggleEnunciado() {
    this.isEnunciadoVisible = !this.isEnunciadoVisible;
  }
}
