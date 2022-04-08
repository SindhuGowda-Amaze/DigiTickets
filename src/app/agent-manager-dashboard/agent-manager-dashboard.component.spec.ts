import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentManagerDashboardComponent } from './agent-manager-dashboard.component';

describe('AgentManagerDashboardComponent', () => {
  let component: AgentManagerDashboardComponent;
  let fixture: ComponentFixture<AgentManagerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentManagerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentManagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
