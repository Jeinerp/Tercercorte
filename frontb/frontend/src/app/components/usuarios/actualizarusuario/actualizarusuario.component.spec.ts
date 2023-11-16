import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarusuarioComponent } from './actualizarusuario.component';

describe('ActualizarusuarioComponent', () => {
  let component: ActualizarusuarioComponent;
  let fixture: ComponentFixture<ActualizarusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarusuarioComponent]
    });
    fixture = TestBed.createComponent(ActualizarusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
