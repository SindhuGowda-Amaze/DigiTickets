import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAssignedTicketsDashComponent } from './agent-assigned-tickets-dash.component';

describe('AgentAssignedTicketsDashComponent', () => {
  let component: AgentAssignedTicketsDashComponent;
  let fixture: ComponentFixture<AgentAssignedTicketsDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentAssignedTicketsDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentAssignedTicketsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
