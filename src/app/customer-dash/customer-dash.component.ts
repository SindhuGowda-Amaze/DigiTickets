import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-dash',
  templateUrl: './customer-dash.component.html',
  styleUrls: ['./customer-dash.component.css']
})
export class CustomerDashComponent implements OnInit {

  constructor() { }

  roleid:any;

  ngOnInit(): void {
    this.roleid = sessionStorage.getItem('roleid');
  }

}
