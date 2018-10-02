import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-failedstats',
  templateUrl: './failedstats.component.html',
  styleUrls: ['./failedstats.component.scss']
})
export class FailedstatsComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<FailedstatsComponent>, @Inject(MAT_DIALOG_DATA) public data: string ) { }

  ngOnInit() {
  }
  onCloseConfirm(){
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel(){
    this.thisDialogRef.close('Cancel');
  }

}
