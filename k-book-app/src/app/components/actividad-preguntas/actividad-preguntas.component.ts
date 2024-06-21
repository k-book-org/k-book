import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-actividad-preguntas',
  templateUrl: './actividad-preguntas.component.html',
  styleUrl: './actividad-preguntas.component.css'
})
export class ActividadPreguntasComponent {
  @Input() titulo!: string;
  @Input() descripcion!: string;
  @Input() otroTexto!: string;
}
