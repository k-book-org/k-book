import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntarComponent } from './preguntar.component';

describe('PreguntarComponent', () => {
  let component: PreguntarComponent;
  let fixture: ComponentFixture<PreguntarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreguntarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreguntarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
