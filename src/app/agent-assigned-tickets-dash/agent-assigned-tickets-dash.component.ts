import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-assigned-tickets-dash',
  templateUrl: './agent-assigned-tickets-dash.component.html',
  styleUrls: ['./agent-assigned-tickets-dash.component.css']
})
export class AgentAssignedTicketsDashComponent implements OnInit {

  constructor() { }
  roleid:any;
  ngOnInit(): void {
    this.roleid = sessionStorage.getItem('roleid');
  }

}
