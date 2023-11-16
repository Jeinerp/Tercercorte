import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarlibroComponent } from './mostrarlibro.component';

describe('MostrarlibroComponent', () => {
  let component: MostrarlibroComponent;
  let fixture: ComponentFixture<MostrarlibroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarlibroComponent]
    });
    fixture = TestBed.createComponent(MostrarlibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
