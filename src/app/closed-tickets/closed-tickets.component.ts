import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-closed-tickets',
  templateUrl: './closed-tickets.component.html',
  styleUrls: ['./closed-tickets.component.css']
})
export class ClosedTicketsComponent implements OnInit {

  constructor() { }
  roleid:any;
  ngOnInit(): void {
    this.roleid = sessionStorage.getItem('roleid');
  }


}
