import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedTicketReportComponent } from './accepted-ticket-report.component';

describe('AcceptedTicketReportComponent', () => {
  let component: AcceptedTicketReportComponent;
  let fixture: ComponentFixture<AcceptedTicketReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedTicketReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedTicketReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
