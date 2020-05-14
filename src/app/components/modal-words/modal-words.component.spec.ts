import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWordsComponent } from './modal-words.component';

describe('ModalWordsComponent', () => {
  let component: ModalWordsComponent;
  let fixture: ComponentFixture<ModalWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
