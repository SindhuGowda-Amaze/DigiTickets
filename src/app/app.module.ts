import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CompanySetupComponent } from './company-setup/company-setup.component';
import { StaffSetupComponent } from './staff-setup/staff-setup.component';
import { AgentManagerDashboardComponent } from './agent-manager-dashboard/agent-manager-dashboard.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { AgentAssignedTicketsDashComponent } from './agent-assigned-tickets-dash/agent-assigned-tickets-dash.component';
import { AgentAcceptedTicketDashComponent } from './agent-accepted-ticket-dash/agent-accepted-ticket-dash.component';
import { PremadereplydashComponent } from './premadereplydash/premadereplydash.component';
import { HelptopicdashComponent } from './helptopicdash/helptopicdash.component';
import { ReportsComponent } from './reports/reports.component';
import { ClosedTicketsComponent } from './closed-tickets/closed-tickets.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    SpinnerComponent,
    CompanySetupComponent,
    StaffSetupComponent,
    AgentManagerDashboardComponent,
    TicketDetailsComponent,
    AgentAssignedTicketsDashComponent,
    AgentAcceptedTicketDashComponent,
    PremadereplydashComponent,
    HelptopicdashComponent,
    ReportsComponent,
    ClosedTicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
