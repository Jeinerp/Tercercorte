import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddejemplaresComponent } from './addejemplares.component';

describe('AddejemplaresComponent', () => {
  let component: AddejemplaresComponent;
  let fixture: ComponentFixture<AddejemplaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddejemplaresComponent]
    });
    fixture = TestBed.createComponent(AddejemplaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
