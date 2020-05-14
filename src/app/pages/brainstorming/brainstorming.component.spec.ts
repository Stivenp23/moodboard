import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainstormingComponent } from './brainstorming.component';

describe('BrainstormingComponent', () => {
  let component: BrainstormingComponent;
  let fixture: ComponentFixture<BrainstormingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrainstormingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainstormingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
