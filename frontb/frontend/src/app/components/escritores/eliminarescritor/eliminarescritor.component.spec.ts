import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarescritorComponent } from './eliminarescritor.component';

describe('EliminarescritorComponent', () => {
  let component: EliminarescritorComponent;
  let fixture: ComponentFixture<EliminarescritorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarescritorComponent]
    });
    fixture = TestBed.createComponent(EliminarescritorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
