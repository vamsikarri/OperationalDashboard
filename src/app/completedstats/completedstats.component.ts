import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';




@Component({
  selector: 'app-completedstats',
  templateUrl: './completedstats.component.html',
  styleUrls: ['./completedstats.component.scss']
})
export class CompletedstatsComponent implements OnInit {

  /**
   * Constructor method to handle the Dialog Reference and passing data
   * @param thisDialogRef 
   * @param data 
   */
  constructor(public thisDialogRef: MatDialogRef<CompletedstatsComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
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
    this.thisDialogRef.close('Cancel');
  }

}
