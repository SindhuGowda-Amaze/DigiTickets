import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premadereplydash',
  templateUrl: './premadereplydash.component.html',
  styleUrls: ['./premadereplydash.component.css']
})
export class PremadereplydashComponent implements OnInit {

  constructor() { }

  roleid:any;
  ngOnInit(): void {
    this.roleid = sessionStorage.getItem('roleid');
  }
}
