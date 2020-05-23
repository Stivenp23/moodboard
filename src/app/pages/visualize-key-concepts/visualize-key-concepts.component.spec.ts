import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeKeyConceptsComponent } from './visualize-key-concepts.component';

describe('VisualizeKeyConceptsComponent', () => {
  let component: VisualizeKeyConceptsComponent;
  let fixture: ComponentFixture<VisualizeKeyConceptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizeKeyConceptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizeKeyConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
