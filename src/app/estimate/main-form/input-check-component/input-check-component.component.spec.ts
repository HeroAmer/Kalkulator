import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCheckComponentComponent } from './input-check-component.component';

describe('InputCheckComponentComponent', () => {
  let component: InputCheckComponentComponent;
  let fixture: ComponentFixture<InputCheckComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCheckComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCheckComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
