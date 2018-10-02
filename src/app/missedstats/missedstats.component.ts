import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-missedstats',
  templateUrl: './missedstats.component.html',
  styleUrls: ['./missedstats.component.scss']
})
export class MissedstatsComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<MissedstatsComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }
 onCloseConfirm(){
   this.thisDialogRef.close('Confirm');
 }
 onCloseCancel(){
 this.thisDialogRef.close('Cancel')
 }
}
