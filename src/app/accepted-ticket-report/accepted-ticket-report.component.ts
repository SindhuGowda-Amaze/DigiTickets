import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accepted-ticket-report',
  templateUrl: './accepted-ticket-report.component.html',
  styleUrls: ['./accepted-ticket-report.component.css']
})
export class AcceptedTicketReportComponent implements OnInit {

  constructor() { }

  roleid:any;

  ngOnInit(): void {
    this.roleid = sessionStorage.getItem('roleid');
  }
}
