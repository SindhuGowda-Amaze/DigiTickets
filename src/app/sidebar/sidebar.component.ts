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
    this.temp = localStorage.getItem('temp')
    this.roleid = localStorage.getItem('roleid');
    this.company_name = localStorage.getItem("company_name");
    this.UserName = localStorage.getItem('UserName');
    this.role = localStorage.getItem('role')

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
    localStorage.setItem('clickname', 'Company etup')
    this.router.navigate(['/CompanySetup']);
    this.active = 94;
  }
  public StaffSetup() {
    debugger
    this.active = 95;
    localStorage.setItem('clickname', 'Staff Setup')
    this.router.navigate(['/StaffSetup']);
  }

  public customerreport() {
    debugger
    this.active = 96;
    localStorage.setItem('clickname', 'Customer Report')
    this.router.navigate(['/CustomerReport']);
  }

  public NewInstallation() {
    debugger
    this.active = 97;
    localStorage.setItem('clickname', 'New Installation')
    this.router.navigate(['/NewInstallation']);
  }
  public TicketDetails() {
    debugger
    this.active = 'TicketDetails';
    localStorage.setItem('clickname', 'TicketDetails')
    this.router.navigate(['/TicketDetails']);
  }


  public CustomerIssues() {
    debugger
    this.active = 98;
    localStorage.setItem('clickname', 'Customer Issues')
    this.router.navigate(['/CustomerIssues']);
  }

  public PayGroup() {
    debugger
    this.active = 4;
    localStorage.setItem('clickname', 'PAYGROUP')
    this.router.navigate(['/PayGroup']);
  }
  public UploadLeaveDetails() {
    debugger
    this.active = 'UploadLeaveDetails';
    localStorage.setItem('clickname', 'Upload Leave Details')
    this.router.navigate(['/LeaveDetailsupload']);
  }

  public report() {
    debugger
    this.active = 'report';
    localStorage.setItem('clickname', 'Report')
    this.router.navigate(['/Reports']);
  }

  public helptopic() {
    debugger
    this.active ='helptopic';
    localStorage.setItem('clickname', 'Help Topic')
    this.router.navigate(['/Helptopicdash']);
  }

  public premadereply() {
    debugger
    this.active = 121;
    localStorage.setItem('clickname', 'Premade Reply')
    this.router.navigate(['/Premadereplydash']);
  }

  public closed() {
    debugger
    this.active = 122;
    localStorage.setItem('clickname', 'Closed Tickets')
    this.router.navigate(['/ClosedTickets']);
  }

  public AgentAcceptedTicket() {
    debugger
    this.active = 'AgentAcceptedTicket';
    localStorage.setItem('clickname', 'Accepted Ticket')
    this.router.navigate(['/AgentAcceptedTicket']);
  }
  

  public OpenTickets() {
    debugger
    this.active = 'OpenTickets';
    localStorage.setItem('clickname', 'Open Tickets')
    this.router.navigate(['/AgentAssignedTicketsDash']);
  }
}
