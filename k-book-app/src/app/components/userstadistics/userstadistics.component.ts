import { Component, Input, OnChanges, SimpleChanges, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-userstadistics',
  templateUrl: './userstadistics.component.html',
  styleUrls: ['./userstadistics.component.css'],
})
export class UserstadisticsComponent implements OnChanges {
  @Input() texto!: string;
  @Input() titulo!: string;
  @Input() percentage: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['percentage']) {
      const progressBar = this.el.nativeElement.querySelector('.progress-bar');
      const progressText = this.el.nativeElement.querySelector('.progress-text');
      if (progressBar) {
        if (this.percentage < 55) {
          this.renderer.addClass(progressText, 'over');
        } else {
          this.renderer.removeClass(progressText, 'over');
        }
      }
    }
  }
}
