import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceContainerComponentComponent } from './price-container-component.component';

describe('PriceContainerComponentComponent', () => {
  let component: PriceContainerComponentComponent;
  let fixture: ComponentFixture<PriceContainerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceContainerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceContainerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
