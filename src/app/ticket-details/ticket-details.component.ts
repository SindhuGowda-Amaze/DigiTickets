import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  viewMode = 'tab1';
  constructor() { }

  roleid:any;

  ngOnInit(): void {
    this.roleid = localStorage.getItem('roleid');
  }
  delete(){
    
  }


}
