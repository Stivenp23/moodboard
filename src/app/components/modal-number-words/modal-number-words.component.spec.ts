import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNumberWordsComponent } from './modal-number-words.component';

describe('ModalNumberWordsComponent', () => {
  let component: ModalNumberWordsComponent;
  let fixture: ComponentFixture<ModalNumberWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNumberWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNumberWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
