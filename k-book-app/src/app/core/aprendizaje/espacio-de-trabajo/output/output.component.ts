import { Component, OnInit } from '@angular/core';
import { OutputStateService } from './output-state.service';

@Component({ 
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})

export class AppOutputComponent implements OnInit {
  defaultMessage: string = 'User@k-book:';
  outputHidden: boolean = false;

  constructor(private outputStateService: OutputStateService) {
    this.outputStateService.outputHidden$.subscribe(hidden => {
      this.outputHidden = hidden;
    });
  }

  ngOnInit() {
    this.outputStateService.outputHidden$.subscribe(hidden => {
      this.outputHidden = hidden;
    });
  }

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
