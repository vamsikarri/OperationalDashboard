import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import { DashboardService } from '../dashboard.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
 // user_identifier;
  user_role_group_identifier;
  gathi_application_identifier;
  /*access_request_date;
  access_request_start_date;
  access_request_end_date;
  access_approval_status_text;
  access_approval_date;
  approval_effective_start_date;
  approval_effective_end_date;
  record_created_by_identifier;
  record_last_update_timestamp;*/
  userid = new FormControl('', [Validators.required]);
  userrole = new FormControl('', [Validators.required]);
  application = new FormControl('', [Validators.required]);
  accessreqstrtdt = new FormControl('', [Validators.required]);
  accessreqenddt = new FormControl('', [Validators.required]);
  application_names: string[];
  user_roles: string[];
  /**
   * Form Validations
   */
  getUserIDErrorMessage() {
    return this.userid.hasError('required') ? 'Please enter user id' : this.userid.hasError('userid') ? 'Not a valid User ID' : '';
  }
  /**
   * Form Validations
   */
  getUserRoleErrorMessage(){
    return this.userrole.hasError('required') ? 'Please select user role' : this.userrole.hasError('userrole') ? 'Not a valid User Role' : '';
  }
  /**
   * Form Validations
   */
  getApplicationNamesErrorMessage(){
    return this.application.hasError('required') ? 'Please select application names' : this.application.hasError('application') ? 'Not a valid Application' : '';
  }
  /**
   * Form Validations
   */
  getAccessReqStrtDtErrorMessage(){
    return this.accessreqstrtdt.hasError('required') ? 'Please enter access request start date' : this.accessreqstrtdt.hasError('accessreqstrtdt') ? 'Not a valid Start Date' : '';
  }
  /**
   * Form Validations
   */
  getAccessReqEndDtErrorMessage(){
    return this.accessreqenddt.hasError('required') ? 'Please enter access request end date' : this.accessreqenddt.hasError('accessreqenddt') ? 'Not a valid End Date' : '';
  }

  constructor(public thisDialogRef: MatDialogRef<RegistrationComponent>, @Inject(MAT_DIALOG_DATA) public data, private dashboardservice: DashboardService) { 
    console.log("A:" + data.applications);
    console.log("B:" + data.user_roles);
    
    this.application_names = data.applications;
    this.user_roles = data.user_roles;
  }

  ngOnInit() {

  }
 onCloseConfirm(){
   this.thisDialogRef.close('Confirm');
 }
 onCloseCancel(){
 this.thisDialogRef.close('Cancel')
 }
/**
 * Register a User
 */
 userRegsitration(){
  var user_identifier = $('.user_identifier').val();
  var user_role_group_identifier = this.user_role_group_identifier;
  var gathi_application_identifier = this.gathi_application_identifier;
  //var access_request_date = $('.access_request_date').val();
  var access_request_start_date = $('.access_request_start_date').val();
  var access_request_end_date = $('.access_request_end_date').val();
  /*var access_approval_status_text = $('.access_approval_status_text').val();
  var access_approval_date = $('.access_approval_date').val();
  var approval_effective_start_date = $('.approval_effective_start_date').val();
  var approval_effective_end_date = $('.approval_effective_end_date').val();
  var record_created_by_identifier = $('.record_created_by_identifier').val();
  var record_last_update_timestamp = $('.record_last_update_timestamp').val();*/
  if(this.user_role_group_identifier = 'undefined'){
    user_role_group_identifier = '';
  }
  if(this.gathi_application_identifier = 'undefined'){
    gathi_application_identifier = '';
  }
  this.dashboardservice.userRegistrationDetails(user_identifier,user_role_group_identifier,gathi_application_identifier,access_request_start_date,access_request_end_date).subscribe((results:any)=>{
    console.log(results)
  });
 }
}
