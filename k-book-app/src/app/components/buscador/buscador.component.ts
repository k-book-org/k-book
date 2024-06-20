import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  @Input() label: string = 'sampleText';
  @Input() type: string = 'text';

  textoIngresado: string = '';

  clearSearchText() {
    this.textoIngresado = ''; // Limpiar el texto del campo de búsqueda
  }
}
