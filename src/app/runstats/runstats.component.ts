import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-runstats',
  templateUrl: './runstats.component.html',
  styleUrls: ['./runstats.component.scss']
})
export class RunstatsComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<RunstatsComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }
  
  onCloseConfirm(){
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel(){
    this.thisDialogRef.close('Cancel');
  }
}
