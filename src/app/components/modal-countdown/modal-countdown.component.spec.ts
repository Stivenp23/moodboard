import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCountdownComponent } from './modal-countdown.component';

describe('ModalCountdownComponent', () => {
  let component: ModalCountdownComponent;
  let fixture: ComponentFixture<ModalCountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCountdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
