import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedTicketReportComponent } from './assigned-ticket-report.component';

describe('AssignedTicketReportComponent', () => {
  let component: AssignedTicketReportComponent;
  let fixture: ComponentFixture<AssignedTicketReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedTicketReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedTicketReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
