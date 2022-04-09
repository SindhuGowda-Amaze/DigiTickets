import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-accepted-ticket-dash',
  templateUrl: './agent-accepted-ticket-dash.component.html',
  styleUrls: ['./agent-accepted-ticket-dash.component.css']
})
export class AgentAcceptedTicketDashComponent implements OnInit {

  constructor() { }

  roleid:any;
  ngOnInit(): void {
    this.roleid = localStorage.getItem('roleid');
  }

}
