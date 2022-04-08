import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
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
  temp1: any;loginname:any;
  ngOnInit(): void {
    interval(1000).subscribe((x => {
      this.pagename = localStorage.getItem('Pagename')
      this.loginname = localStorage.getItem('loginname')
    }));

    setInterval(() => {
      var time = new Date();
      this.time = time.toLocaleString('en-US', { hour: '2-digit', minute: 'numeric', hour12: true });
      let temp: any = this.time.split(':');
      this.hh = temp[0];
      let temp1: any = this.time.split(':')[1].split(" ");
      this.mm = temp1[0];
      this.ampm = temp1[1];
    }, 1000);
  }


  
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
