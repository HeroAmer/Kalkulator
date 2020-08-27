import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCardComponent } from './popup-card.component';

describe('PopupCardComponent', () => {
  let component: PopupCardComponent;
  let fixture: ComponentFixture<PopupCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
