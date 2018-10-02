import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatPaginator, MatTableDataSource} from '@angular/material';



@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class HelpComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'description' ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
   nmg = 'logo'; 
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public thisDialogRef: MatDialogRef<HelpComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /**
   * Dialog window pop-up screen Cancel
   */
  onCloseCancel(){
    this.thisDialogRef.close('Cancel');
  }
}
export interface PeriodicElement {
  name: string;
  description: string;
  image: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Jobs Waiting', description: 'Jobs that are Waiting for selected Applications',image:'waiting'},
  { name: 'Jobs Completed', description:'Jobs that are Completed for selected Applications', image:'completed'},
  { name: 'Jobs Running', description:'Jobs that are Running for selected Applications', image:'running'},
  { name: 'Jobs Failed', description:'Jobs Failed for selected Applications',image:'failed'},
  { name: 'SLA Missed', description:'SLA Missed for selected Applications',image:'slamissed'},
  { name: 'Query Run Status', description:'Graph which shows the overall vs current query performance for last 24 hours', image:'runstats'},
  { name: 'Query Elevation', description:'Grah that shows the peak times when the query has failed', image:'queryelevation'}
];