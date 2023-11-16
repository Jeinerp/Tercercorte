import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddautorComponent } from './addautor.component';

describe('AddautorComponent', () => {
  let component: AddautorComponent;
  let fixture: ComponentFixture<AddautorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddautorComponent]
    });
    fixture = TestBed.createComponent(AddautorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
