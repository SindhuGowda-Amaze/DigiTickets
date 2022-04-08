import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentManagerDashboardComponent } from './agent-manager-dashboard/agent-manager-dashboard.component';
import { CompanySetupComponent } from './company-setup/company-setup.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StaffSetupComponent } from './staff-setup/staff-setup.component';

const routes: Routes = [

  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  {path:'Login',component:LoginComponent},
  {path:'Header',component:HeaderComponent},
  {path:'Sidebar',component:SidebarComponent},
  {path:'Footer',component:FooterComponent},
  {path:'CompanySetup',component:CompanySetupComponent},
  {path:'StaffSetup',component:StaffSetupComponent},
  {path:'AgentManagerDashboard',component:AgentManagerDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
