import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelsdashboardComponent } from './travelsdashboard.component';

describe('TravelsdashboardComponent', () => {
  let component: TravelsdashboardComponent;
  let fixture: ComponentFixture<TravelsdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelsdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
