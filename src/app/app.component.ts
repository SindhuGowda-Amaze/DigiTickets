import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DigiTickets';
  constructor(public router: Router) { }
  login: any;
  chatcount: any;
  myname: any
  staffID: any;
  pagename: any;
  showsidebar: any;
  time: any;
  hh: any;
  mm: any;
  ampm: any;
  username: any;
  officelogo: any;
  CompanyConfiguration: any;
  temp1: any;
  ngOnInit(): void {}

  initail: any
  notificationslist: any

  public GetNotification() {
    debugger

    // this.DigiofficeService.GetNotification(this.staffID).subscribe(data => {
    //   debugger
    //   this.notificationslist = data;
    // })
  }

  public ClearNotification() {
    debugger
    // this.DigiofficeService.ClearNotificationByID(Number(this.staffID)).subscribe(data => {
    //   debugger

    // })

    Swal.fire('Cleared Successfully');
    this.GetNotification();

  }


  public onActivate(event: any) {
    window.scroll(0, 0);
  }

  public logout() {
    debugger
    // this.loader = true;
    localStorage.setItem('roledid', "0");
    this.router.navigate(['/Login']).then(() => {

      location.reload();
      localStorage.clear();
      sessionStorage.clear();

    })
  }

  public Clearstorge() {
    localStorage.setItem('temp', '0');
    location.reload();
  }


  public accountsetting() {
    debugger
    this.router.navigate(['/MyAccountSetting']);
  }
}
