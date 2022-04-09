import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolvedTicketReportComponent } from './resolved-ticket-report.component';

describe('ResolvedTicketReportComponent', () => {
  let component: ResolvedTicketReportComponent;
  let fixture: ComponentFixture<ResolvedTicketReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolvedTicketReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolvedTicketReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
