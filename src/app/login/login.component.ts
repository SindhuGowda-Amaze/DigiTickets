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
        localStorage.setItem("roleid", this.roleid)
        localStorage.setItem("loginname", this.username)

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
      if (this.username == "agent" && this.password == "123") {
        localStorage.setItem("temp", "1")
        localStorage.setItem("roleid", this.roleid)
        localStorage.setItem("loginname", this.username)

        this.router.navigate(['/NewInstallation']).then(() => {
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
