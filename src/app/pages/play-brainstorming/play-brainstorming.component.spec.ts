import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayBrainstormingComponent } from './play-brainstorming.component';

describe('PlayBrainstormingComponent', () => {
  let component: PlayBrainstormingComponent;
  let fixture: ComponentFixture<PlayBrainstormingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayBrainstormingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayBrainstormingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
