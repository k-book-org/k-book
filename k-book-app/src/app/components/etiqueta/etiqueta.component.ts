import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-etiqueta',
  templateUrl: './etiqueta.component.html',
  styleUrl: './etiqueta.component.css'
})
export class EtiquetaComponent {
  @Input() nombre:string = "";
}
