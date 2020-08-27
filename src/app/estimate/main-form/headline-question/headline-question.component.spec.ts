import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineQuestionComponent } from './headline-question.component';

describe('HeadlineQuestionComponent', () => {
  let component: HeadlineQuestionComponent;
  let fixture: ComponentFixture<HeadlineQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlineQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
