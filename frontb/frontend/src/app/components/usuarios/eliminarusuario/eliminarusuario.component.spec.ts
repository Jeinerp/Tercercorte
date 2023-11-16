import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarusuarioComponent } from './eliminarusuario.component';

describe('EliminarusuarioComponent', () => {
  let component: EliminarusuarioComponent;
  let fixture: ComponentFixture<EliminarusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarusuarioComponent]
    });
    fixture = TestBed.createComponent(EliminarusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
