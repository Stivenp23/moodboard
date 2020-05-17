import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainstormingDemoComponent } from './brainstorming-demo.component';

describe('BrainstormingDemoComponent', () => {
  let component: BrainstormingDemoComponent;
  let fixture: ComponentFixture<BrainstormingDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrainstormingDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainstormingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
