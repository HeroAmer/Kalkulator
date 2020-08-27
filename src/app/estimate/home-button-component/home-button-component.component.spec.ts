import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeButtonComponentComponent } from './home-button-component.component';

describe('HomeButtonComponentComponent', () => {
  let component: HomeButtonComponentComponent;
  let fixture: ComponentFixture<HomeButtonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeButtonComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
