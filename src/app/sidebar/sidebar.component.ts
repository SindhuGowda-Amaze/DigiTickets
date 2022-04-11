import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public router: Router) { }
  roleid: any;
  UserName: any;
  company_name: any;
  role: any;
  temp: any;
  show: any;
  active: any;
  ngOnInit(): void {
    this.active = 0
    this.temp = sessionStorage.getItem('temp')
    this.roleid = sessionStorage.getItem('roleid');
    this.company_name = sessionStorage.getItem("company_name");
    this.UserName = sessionStorage.getItem('UserName');
    this.role = sessionStorage.getItem('role')

  }

  public highlight(evt: any) {
    debugger
    var i, tablinks;
    //  localStorage.setItem("clickname",name)
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
  }




  public CompanySetup() {
    debugger
    sessionStorage.setItem('clickname', 'Company etup')
    this.router.navigate(['/CompanySetup']);
    this.active = 94;
  }
  public StaffSetup() {
    debugger
    this.active = 95;
    sessionStorage.setItem('clickname', 'Staff Setup')
    this.router.navigate(['/StaffSetup']);
  }

  public customerreport() {
    debugger
    this.active = 96;
    sessionStorage.setItem('clickname', 'Customer Report')
    this.router.navigate(['/CustomerReport']);
  }

  public NewInstallation() {
    debugger
    this.active = 97;
    sessionStorage.setItem('clickname', 'New Installation')
    this.router.navigate(['/NewInstallation']);
  }
  public TicketDetails() {
    debugger
    this.active = 'TicketDetails';
    sessionStorage.setItem('clickname', 'TicketDetails')
    this.router.navigate(['/TicketDetails']);
  }


  public CustomerIssues() {
    debugger
    this.active = 98;
    sessionStorage.setItem('clickname', 'Customer Issues')
    this.router.navigate(['/CustomerIssues']);
  }

  public PayGroup() {
    debugger
    this.active = 4;
    sessionStorage.setItem('clickname', 'PAYGROUP')
    this.router.navigate(['/PayGroup']);
  }
  public UploadLeaveDetails() {
    debugger
    this.active = 'UploadLeaveDetails';
    sessionStorage.setItem('clickname', 'Upload Leave Details')
    this.router.navigate(['/LeaveDetailsupload']);
  }

  public report() {
    debugger
    this.active = 'report';
    sessionStorage.setItem('clickname', 'Report')
    // this.router.navigate(['/Reports']);
  }

  public helptopic() {
    debugger
    this.active ='helptopic';
    sessionStorage.setItem('clickname', 'Help Topic')
    this.router.navigate(['/Helptopicdash']);
  }

  public premadereply() {
    debugger
    this.active = 121;
    sessionStorage.setItem('clickname', 'Premade Reply')
    this.router.navigate(['/Premadereplydash']);
  }

  public closed() {
    debugger
    this.active = 122;
    sessionStorage.setItem('clickname', 'Closed Tickets')
    this.router.navigate(['/ClosedTickets']);
  }

  public AgentAcceptedTicket() {
    debugger
    this.active = 'AgentAcceptedTicket';
    sessionStorage.setItem('clickname', 'Accepted Ticket')
    this.router.navigate(['/AgentAcceptedTicket']);
  }
  

  public OpenTickets() {
    debugger
    this.active = 'OpenTickets';
    sessionStorage.setItem('clickname', 'Open Tickets')
    this.router.navigate(['/TicketDetails']);
  }

  public dashboard() {
    debugger
    this.active = 999;
    sessionStorage.setItem('clickname', 'Dashboard')
    this.router.navigate(['/AgentManagerDashboard']);
  }

  public customerdashboard() {
    debugger
    this.active = 998;
    sessionStorage.setItem('clickname', 'Dashboard')
    this.router.navigate(['/CustomerDash']);
  }

  public load() {
    debugger
    this.active = 'load';
    sessionStorage.setItem('clickname', 'Staff Loading')
    this.router.navigate(['/StaffLoading']);
  }





  public ropen() {
    debugger
    this.active = 'ropen';
    sessionStorage.setItem('clickname', 'Open Report')
    this.router.navigate(['/OpenTicketReport']);
  }
  public rassigned() {
    debugger
    this.active = 'rassigned';
    sessionStorage.setItem('clickname', 'Assigned Report')
    this.router.navigate(['/AssignedTicketReport']);
  }
  public raccepted() {
    debugger
    this.active = 'raccepted';
    sessionStorage.setItem('clickname', 'Accepted Report')
    this.router.navigate(['/AcceptedTicketReport']);
  }
  public rresolved() {
    debugger
    this.active = 'rresolved';
    sessionStorage.setItem('clickname', 'Resolved Report')
    this.router.navigate(['/ResolvedTicket']);
  }
  public roverdue() {
    debugger
    this.active = 'roverdue';
    sessionStorage.setItem('clickname', 'Overdue Report')
    this.router.navigate(['/OverdueReport']);
  }
  public rclosed() {
    debugger
    this.active = 'rclosed';
    sessionStorage.setItem('clickname', 'Closed Report')
    this.router.navigate(['/ResolvedTicket']);
  }

}
