import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenTicketReportComponent } from './open-ticket-report.component';

describe('OpenTicketReportComponent', () => {
  let component: OpenTicketReportComponent;
  let fixture: ComponentFixture<OpenTicketReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenTicketReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenTicketReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
