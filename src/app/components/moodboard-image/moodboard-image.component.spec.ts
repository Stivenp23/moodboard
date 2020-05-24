import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodboardImageComponent } from './moodboard-image.component';

describe('MoodboardImageComponent', () => {
  let component: MoodboardImageComponent;
  let fixture: ComponentFixture<MoodboardImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodboardImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodboardImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
