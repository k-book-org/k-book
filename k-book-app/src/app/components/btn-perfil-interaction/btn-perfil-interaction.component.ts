import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-perfil-interaction',
  templateUrl: './btn-perfil-interaction.component.html',
  styleUrl: './btn-perfil-interaction.component.css'
})
export class BtnPerfilInteractionComponent {
  @Input() buttonText: string = '';
}
