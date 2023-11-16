import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarautorComponent } from './mostrarautor.component';

describe('MostrarautorComponent', () => {
  let component: MostrarautorComponent;
  let fixture: ComponentFixture<MostrarautorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarautorComponent]
    });
    fixture = TestBed.createComponent(MostrarautorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
