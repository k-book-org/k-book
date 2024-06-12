import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-userstadistics',
  templateUrl: './userstadistics.component.html',
  styleUrl: './userstadistics.component.css',
})
export class UserstadisticsComponent {
  @Input() texto!: string;
  @Input() titulo!: string;
}
