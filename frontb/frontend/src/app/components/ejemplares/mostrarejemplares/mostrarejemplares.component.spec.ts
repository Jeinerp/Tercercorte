import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarejemplaresComponent } from './mostrarejemplares.component';

describe('MostrarejemplaresComponent', () => {
  let component: MostrarejemplaresComponent;
  let fixture: ComponentFixture<MostrarejemplaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarejemplaresComponent]
    });
    fixture = TestBed.createComponent(MostrarejemplaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
