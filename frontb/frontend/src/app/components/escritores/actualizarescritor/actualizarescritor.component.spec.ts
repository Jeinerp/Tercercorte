import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarescritorComponent } from './actualizarescritor.component';

describe('ActualizarescritorComponent', () => {
  let component: ActualizarescritorComponent;
  let fixture: ComponentFixture<ActualizarescritorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarescritorComponent]
    });
    fixture = TestBed.createComponent(ActualizarescritorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
