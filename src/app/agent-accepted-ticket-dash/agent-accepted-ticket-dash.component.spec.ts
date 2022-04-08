import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAcceptedTicketDashComponent } from './agent-accepted-ticket-dash.component';

describe('AgentAcceptedTicketDashComponent', () => {
  let component: AgentAcceptedTicketDashComponent;
  let fixture: ComponentFixture<AgentAcceptedTicketDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentAcceptedTicketDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentAcceptedTicketDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
