import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-pregunta',
  templateUrl: './item-pregunta.component.html',
  styleUrl: './item-pregunta.component.css'
})

export class ItemPreguntaComponent {
  @Input() titulo!: string;
  @Input() cantRespuestas!: Number;
  @Input() autor!: string;
  @Input() fecha!: string;
  @Input() etiquetas!: string[];
}
