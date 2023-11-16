import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarprestamoComponent } from './eliminarprestamo.component';

describe('EliminarprestamoComponent', () => {
  let component: EliminarprestamoComponent;
  let fixture: ComponentFixture<EliminarprestamoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarprestamoComponent]
    });
    fixture = TestBed.createComponent(EliminarprestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
