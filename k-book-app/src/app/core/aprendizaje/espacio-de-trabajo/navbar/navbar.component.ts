import { Component } from '@angular/core';
import { OutputStateService } from '../output/output-state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  constructor(private outputStateService: OutputStateService) {}

  toggleOutputVisibility() {
    this.outputStateService.toggleOutputVisibility();
  }

  closeOutput() {
    this.outputStateService.closeOutput();
  }

  openOutput() {
    this.outputStateService.openOutput();
  }
}
