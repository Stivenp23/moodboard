import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoFloatComponent } from './logo-float.component';

describe('WriteWordsComponent', () => {
  let component: LogoFloatComponent;
  let fixture: ComponentFixture<LogoFloatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoFloatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoFloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
