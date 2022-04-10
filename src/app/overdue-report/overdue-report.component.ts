import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overdue-report',
  templateUrl: './overdue-report.component.html',
  styleUrls: ['./overdue-report.component.css']
})
export class OverdueReportComponent implements OnInit {

  constructor() { }

  roleid:any;

  ngOnInit(): void {
    this.roleid = localStorage.getItem('roleid');
  }
}
