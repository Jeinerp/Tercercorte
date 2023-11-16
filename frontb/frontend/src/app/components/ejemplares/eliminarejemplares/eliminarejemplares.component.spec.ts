import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarejemplaresComponent } from './eliminarejemplares.component';

describe('EliminarejemplaresComponent', () => {
  let component: EliminarejemplaresComponent;
  let fixture: ComponentFixture<EliminarejemplaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarejemplaresComponent]
    });
    fixture = TestBed.createComponent(EliminarejemplaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
