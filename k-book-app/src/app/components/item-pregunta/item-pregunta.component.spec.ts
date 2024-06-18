import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPreguntaComponent } from './item-pregunta.component';

describe('ItemPreguntaComponent', () => {
  let component: ItemPreguntaComponent;
  let fixture: ComponentFixture<ItemPreguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemPreguntaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
