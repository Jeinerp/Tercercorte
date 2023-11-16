import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarescritorComponent } from './mostrarescritor.component';

describe('MostrarescritorComponent', () => {
  let component: MostrarescritorComponent;
  let fixture: ComponentFixture<MostrarescritorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarescritorComponent]
    });
    fixture = TestBed.createComponent(MostrarescritorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
