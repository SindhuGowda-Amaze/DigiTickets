import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
    this.showpassword = 0;
  }
  roleid: any;
  username: any;
  password: any;
  getroleid(even: any) {
    this.roleid = even.target.value;
  }


  login() {
    debugger
    if (this.roleid == 1) {
      debugger
      if (this.username == "admin" && this.password == "1") {
        sessionStorage.setItem("temp", "1")
        sessionStorage.setItem("roleid", this.roleid)
        sessionStorage.setItem("loginname", this.username)

        this.router.navigate(['/CompanySetup']).then(() => {
          location.reload();

        });
      }
      else {
        alert("Please enter valid Credentials")
      }
    }
    else if (this.roleid == 2) {
      debugger
      if (this.username == "manager" && this.password == "123") {
        sessionStorage.setItem("temp", "1")
        sessionStorage.setItem("roleid", this.roleid)
        sessionStorage.setItem("loginname", this.username)

        this.router.navigate(['/AgentManagerDashboard']).then(() => {
          location.reload();

        });

      }
    }
    else if (this.roleid == 3) {
      debugger
      if (this.username == "agent" && this.password == "welcome") {
        sessionStorage.setItem("temp", "1")
        sessionStorage.setItem("roleid", this.roleid)
        sessionStorage.setItem("loginname", this.username)

        this.router.navigate(['/AgentManagerDashboard']).then(() => {
          location.reload();

        });

      }
    }
    else if (this.roleid == 4) {
      debugger
      if (this.username == "customer" && this.password == "welcome") {
        sessionStorage.setItem("temp", "1")
        sessionStorage.setItem("roleid", this.roleid)
        sessionStorage.setItem("loginname", this.username)

        this.router.navigate(['/CustomerDash']).then(() => {
          location.reload();

        });

      }
    }
  }



  showpassword: any;
  Showhidepassword() {
    debugger
    if (this.showpassword == 0) {
      this.showpassword = 1;
    }
    else {
      this.showpassword = 0;
    }
  }
}
