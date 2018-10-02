import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import { RegistrationComponent } from '../registration/registration.component';
import { DashboardService } from '../dashboard.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {
    
  dialogResult = "";
  username;
  password;
  selected_role;
  globalResponse;
  application_names: string[];
  user_roles_reg: string[];
  usernm = new FormControl('', [Validators.required]);
  pswd = new FormControl('', [Validators.required]);
  role = new FormControl('', [Validators.required]);
  
  constructor(public dialog: MatDialog, private dashboardservice: DashboardService, private authenticationService: AuthenticationService, public snackbar: MatSnackBar, private router: Router) { }
  
  getUsernameErrorMessage() {
    return this.usernm.hasError('required') ? 'Please enter username' : this.usernm.hasError('usernm') ? 'Not a valid username' : '';
  }
  getPasswordErrorMessage(){
    return this.pswd.hasError('required') ? 'Please enter password' : this.usernm.hasError('pswd') ? 'Not a valid password' : '';
  }
  getRoleErrorMessage(){
    return this.role.hasError('required') ? 'Please select user role' : this.role.hasError('role') ? '' : '';
  }
  ngOnInit() {
    /**
     * Get the list of Application names for user registration
     */
    this.dashboardservice.getApplicationNamesforRegistration().subscribe((result)=>{
      console.log(result)
      this.application_names = result;
     },(error)=>{})
     /**
      * Get list of all User Roles for Registration
      */
     this.dashboardservice.getUserRolesforRegsitration().subscribe((result)=>{
       //console.log(result)
        this.user_roles_reg = result; 
     },(error)=>{})
  }
  /**
   * SLA Missed Dialog box
   */
  openRegistrationDialog(){
    let dialogRef = this.dialog.open(RegistrationComponent, {
      width: '50%',
      height: '50%',
      data: {applications: this.application_names, user_roles: this.user_roles_reg}
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    })
  }

  /**
   * Login 
   */
   login() {
     var username = this.username;
     var password = this.password;
     var role = this.selected_role;
     localStorage.setItem('userid', 'gaurav');
     this.authenticationService.isLoggedIn = false;
     this.authenticationService.removeToken();
    this.authenticationService.validateUser(username, password, role).subscribe((result)=>{
      this.globalResponse = result;
    },(error)=>{
      //This is error part
       /* this.snackbar.open("Error Logging!","Got it!", {
          duration: 8000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });*/
    },
    ()=>{
      //This is success part
      console.log(this.globalResponse);
      this.snackbar.open("Successfully Logged In!","Got it!", {
        duration: 8000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
      this.authenticationService.storeToken(this.globalResponse.access_token);
      this.authenticationService.isLoggedIn = true;
    });
   /* this.dashboardservice.userLoginCredentials(username, password, role).subscribe((results)=>{
      console.log("Successfully Logged In");
    },(error)=>{
        console.log("Error Logging IN");
    });*/
    this.router.navigateByUrl('/home');  
   }
}
