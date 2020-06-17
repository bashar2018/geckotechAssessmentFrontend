import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerOverviewComponent } from './beer-overview.component';

describe('BeerOverviewComponent', () => {
  let component: BeerOverviewComponent;
  let fixture: ComponentFixture<BeerOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
