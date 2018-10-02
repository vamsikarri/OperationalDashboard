import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { authenticationGuard } from '../guard/authentication.guard';


@NgModule({
  imports: [
    RouterModule.forRoot([
        {path: '', redirectTo: "/login", pathMatch: 'full'},
        {path: 'home', component: DashboardComponent},
        {path: 'login', component:  LoginComponent}
      ])
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}