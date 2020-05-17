import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainstormingIntroComponent } from './brainstorming-intro.component';

describe('BrainstormingIntroComponent', () => {
  let component: BrainstormingIntroComponent;
  let fixture: ComponentFixture<BrainstormingIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrainstormingIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainstormingIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
