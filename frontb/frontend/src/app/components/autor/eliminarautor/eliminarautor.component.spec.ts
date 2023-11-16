import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarautorComponent } from './eliminarautor.component';

describe('EliminarautorComponent', () => {
  let component: EliminarautorComponent;
  let fixture: ComponentFixture<EliminarautorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarautorComponent]
    });
    fixture = TestBed.createComponent(EliminarautorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
