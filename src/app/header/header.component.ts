import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  company_name: any;
  temp: any
  roleid: any;
  role: any;
  UserName: any;
  temp5: any;
  ngOnInit(): void {

    this.temp = sessionStorage.getItem('temp');
    this.temp5 = sessionStorage.getItem('temp');
    this.roleid = sessionStorage.getItem('roleid');
    this.company_name = sessionStorage.getItem("company_name");
    this.UserName = sessionStorage.getItem('UserName');
    this.role = sessionStorage.getItem('role')
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
    location.href = "#/Login";
    location.reload();
  }
  public Clearstorge() {
    sessionStorage.setItem('temp', '0');
    location.reload();
  }

}

