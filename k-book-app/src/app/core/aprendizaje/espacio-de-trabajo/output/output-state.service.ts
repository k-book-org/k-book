import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutputStateService {
  private outputHiddenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  outputHidden$: Observable<boolean> = this.outputHiddenSubject.asObservable();

  constructor() {}

  toggleOutputVisibility() {
    const currentValue = this.outputHiddenSubject.getValue();
    this.outputHiddenSubject.next(!currentValue);
  }

  closeOutput() {
    this.outputHiddenSubject.next(true);
  }

  openOutput() {
    this.outputHiddenSubject.next(false);
  }
}
