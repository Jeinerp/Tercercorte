import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddescritorComponent } from './addescritor.component';

describe('AddescritorComponent', () => {
  let component: AddescritorComponent;
  let fixture: ComponentFixture<AddescritorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddescritorComponent]
    });
    fixture = TestBed.createComponent(AddescritorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
