import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarprestamoComponent } from './mostrarprestamo.component';

describe('MostrarprestamoComponent', () => {
  let component: MostrarprestamoComponent;
  let fixture: ComponentFixture<MostrarprestamoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarprestamoComponent]
    });
    fixture = TestBed.createComponent(MostrarprestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
