import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarusuarioComponent } from './mostrarusuario.component';

describe('MostrarusuarioComponent', () => {
  let component: MostrarusuarioComponent;
  let fixture: ComponentFixture<MostrarusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarusuarioComponent]
    });
    fixture = TestBed.createComponent(MostrarusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
