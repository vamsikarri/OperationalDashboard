import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-waitstats',
  templateUrl: './waitstats.component.html',
  styleUrls: ['./waitstats.component.scss']
})
export class WaitstatsComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<WaitstatsComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }
  onCloseConfirm(){
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel(){
    this.thisDialogRef.close('Cancel');
  }
}
