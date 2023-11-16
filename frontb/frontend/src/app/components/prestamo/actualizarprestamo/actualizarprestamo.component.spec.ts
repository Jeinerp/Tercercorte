import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarprestamoComponent } from './actualizarprestamo.component';

describe('ActualizarprestamoComponent', () => {
  let component: ActualizarprestamoComponent;
  let fixture: ComponentFixture<ActualizarprestamoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarprestamoComponent]
    });
    fixture = TestBed.createComponent(ActualizarprestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
