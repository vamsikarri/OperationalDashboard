/**
 * @author Vamsi Karri
 */
import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { RunstatsComponent } from '../runstats/runstats.component';
import { WaitstatsComponent } from '../waitstats/waitstats.component';
import { CompletedstatsComponent } from '../completedstats/completedstats.component';
import { FailedstatsComponent } from '../failedstats/failedstats.component';
import { MissedstatsComponent } from '../missedstats/missedstats.component';
import { AirflowComponent } from '../airflow/airflow.component';
import { HelpComponent } from '../help/help.component';

import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  dialogResult = "";
  selected = '';
  applications: string[];

  waiting: number;
  completed: number;
  running: number;
  failed: number;
  slamissed: number;


  constructor(public dialog: MatDialog, private dashboardservice: DashboardService, private authenticatoionService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  /**
   * Text to speech
   */
  // this.speaknow();
  /**
   * Set the dashboard initial values to Zero
   */
  this.waiting = 0;
  this.completed = 0;
  this.running = 0;
  this.failed = 0;
  this.slamissed = 0;
  
   /**
    * 
    */
   $('.userid_info').text(localStorage.getItem('userid'));
  }
  /**
   * Dashboard Running Dialog box
   */
  openRunningDialog(){
    let dialogRef = this.dialog.open(RunstatsComponent, {
      width: '50%',
      height: '60%',
      data: 'Running Statistics'
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    })
  }
  /**
   * Dashboard Waiting Dialog box
   */
  openWaitingDialog(){
    let dialogRef = this.dialog.open(WaitstatsComponent, {
      width: '50%',
      height: '60%',
      data: 'Waiting Statistics'
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    })
  }
  /**
   * Dashboard Completed Dialog box
   */
  openCompletedDialog(){
    let dialogRef = this.dialog.open(CompletedstatsComponent, {
      width: '50%',
      height: '60%',
      data: 'Completed Statistics'
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    })
  }
  /**
   * Dashboard Failed Dialog box
   */
  openFailedDialog(){
    let dialogRef = this.dialog.open(FailedstatsComponent, {
      width: '50%',
      height: '60%',
      data: 'Failed Statistics'
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    })
  }
  /**
   * SLA Missed Dialog box
   */
  openSLAMissedDialog(){
    let dialogRef = this.dialog.open(MissedstatsComponent, {
      width: '50%',
      height: '60%',
      data: 'SLA Missed Statistics'
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    })
  }
  /**
   * Dashboard Integrated Airflow Dialog box
   */
  openAirflowDialog(){
    let dialogRef = this.dialog.open(AirflowComponent, {
      width: '99%',
      height: '85%',
      data: 'Airflow Statistics'
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    })
  }
  /**
   * SLA Missed Dialog box
   */
  openHelpDialog(){
    let dialogRef = this.dialog.open(HelpComponent, {
      width: '99%',
      height: 'auto',
      data: 'Help'
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    })
  }
  /**
   * Text to speech
  */
 speaknow(){
     var speech = new SpeechSynthesisUtterance();
     speech.rate = .9;
     speech.pitch = 1;
     speech.volume = 2;
     speech.voice = speechSynthesis.getVoices()[0];
     speech.text = "Hello Administrator, Welcome to Operational Dashboard. Please select Applications to see job Statistics";
     speechSynthesis.speak(speech);
 }
 /**
  * Select applications to get see statistics
  */
 setStatistics(applications: string[]): void{
  
 //temporary values to check functionality 
   this.waiting = 30;
   this.completed = 20;
   this.running = 10;
   this.failed = 1;
   this.slamissed =20;
   
   var failedjobsval = this.failed;
      if(failedjobsval == 0){
          $('#failedjobsvalue').addClass('no_blink');
          $('#failedjobsvalue').removeClass('blink_me');
      }
      else{
       $('#failedjobsvalue').addClass('blink_me');
       $('#failedjobsvalue').removeClass('no_blink');
      }

   this.dashboardservice.setDashboardStatistics(localStorage.getItem('userid'),applications).subscribe((results)=>{

    },(error)=> {

    })
 }

 /**
  * Logout
  */
 logout(){
   this.authenticatoionService.isLoggedIn = false;
   this.authenticatoionService.removeToken();
   this.router.navigate(['login']);
 }
}
