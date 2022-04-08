import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentAcceptedTicketDashComponent } from './agent-accepted-ticket-dash/agent-accepted-ticket-dash.component';
import { AgentAssignedTicketsDashComponent } from './agent-assigned-tickets-dash/agent-assigned-tickets-dash.component';
import { AgentManagerDashboardComponent } from './agent-manager-dashboard/agent-manager-dashboard.component';
import { CompanySetupComponent } from './company-setup/company-setup.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StaffSetupComponent } from './staff-setup/staff-setup.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

const routes: Routes = [

  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  {path:'Login',component:LoginComponent},
  {path:'Header',component:HeaderComponent},
  {path:'Sidebar',component:SidebarComponent},
  {path:'Footer',component:FooterComponent},
  {path:'CompanySetup',component:CompanySetupComponent},
  {path:'StaffSetup',component:StaffSetupComponent},
  {path:'AgentManagerDashboard',component:AgentManagerDashboardComponent},
  {path:'TicketDetails',component:TicketDetailsComponent},
  {path:'AgentAssignedTicketsDash',component:AgentAssignedTicketsDashComponent},
  {path:'AgentAcceptedTicket',component:AgentAcceptedTicketDashComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
