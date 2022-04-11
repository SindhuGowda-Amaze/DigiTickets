import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resolved-ticket-report',
  templateUrl: './resolved-ticket-report.component.html',
  styleUrls: ['./resolved-ticket-report.component.css']
})
export class ResolvedTicketReportComponent implements OnInit {

  constructor() { }

  roleid:any;

  ngOnInit(): void {
    this.roleid = sessionStorage.getItem('roleid');
  }
}
