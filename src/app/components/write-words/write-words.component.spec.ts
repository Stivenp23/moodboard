import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteWordsComponent } from './write-words.component';

describe('WriteWordsComponent', () => {
  let component: WriteWordsComponent;
  let fixture: ComponentFixture<WriteWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
