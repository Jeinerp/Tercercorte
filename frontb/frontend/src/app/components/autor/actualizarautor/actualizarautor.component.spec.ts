import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarautorComponent } from './actualizarautor.component';

describe('ActualizarautorComponent', () => {
  let component: ActualizarautorComponent;
  let fixture: ComponentFixture<ActualizarautorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarautorComponent]
    });
    fixture = TestBed.createComponent(ActualizarautorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
