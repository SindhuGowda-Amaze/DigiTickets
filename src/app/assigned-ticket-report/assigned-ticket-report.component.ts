import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigned-ticket-report',
  templateUrl: './assigned-ticket-report.component.html',
  styleUrls: ['./assigned-ticket-report.component.css']
})
export class AssignedTicketReportComponent implements OnInit {

  constructor() { }

  roleid:any;

  ngOnInit(): void {
    this.roleid = localStorage.getItem('roleid');
  }

}
