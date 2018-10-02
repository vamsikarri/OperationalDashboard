import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

declare var $:any;
@Component({
  selector: 'app-airflow',
  templateUrl: './airflow.component.html',
  styleUrls: ['./airflow.component.scss']
})
export class AirflowComponent implements OnInit {

  /**
   * Constructor method to handle the Dialog Reference and passing data
   * @param thisDialogRef 
   * @param data 
   */
  constructor(public thisDialogRef: MatDialogRef<AirflowComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }
  /**
   * Drag Start Pointer Events
   */
  onDragStart(event: PointerEvent): void {
    console.log(`got Drag Started ${Math.round(event.clientX)} ${Math.round(event.clientY)}`);
  }
  /**
   * Drag Move Poninter Events
   */
  onDragMove(event: PointerEvent): void{
    console.log(`got Drag moved ${Math.round(event.clientX)} ${Math.round(event.clientY)}`);
  }
  /**
   * Drag End Pointer Events
   * @param event  
   */
  onDragEnd(event: PointerEvent): void{
    console.log(`got Drag End ${Math.round(event.clientX)} ${Math.round(event.clientY)}`);
  }
  /**
   * Dialog window pop-up screen Confirm 
   */
  onCloseConfirm(){
   this.thisDialogRef.close('Confirm');
  }
  /**
   * Dialog window pop-up screen Cancel
   */
  onCloseCancel(){
   this.thisDialogRef.close('Close');
  }
}
