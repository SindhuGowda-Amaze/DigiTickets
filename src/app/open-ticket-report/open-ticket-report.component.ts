import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-ticket-report',
  templateUrl: './open-ticket-report.component.html',
  styleUrls: ['./open-ticket-report.component.css']
})
export class OpenTicketReportComponent implements OnInit {

  constructor() { }

  roleid:any;

  ngOnInit(): void {
    this.roleid = sessionStorage.getItem('roleid');
  }

}
