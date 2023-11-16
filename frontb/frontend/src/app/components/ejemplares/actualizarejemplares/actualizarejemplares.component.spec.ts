import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarejemplaresComponent } from './actualizarejemplares.component';

describe('ActualizarejemplaresComponent', () => {
  let component: ActualizarejemplaresComponent;
  let fixture: ComponentFixture<ActualizarejemplaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarejemplaresComponent]
    });
    fixture = TestBed.createComponent(ActualizarejemplaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
