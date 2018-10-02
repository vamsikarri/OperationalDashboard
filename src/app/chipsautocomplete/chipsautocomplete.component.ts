import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import { DashboardService } from '../dashboard.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

declare var $:any;

@Component({
  selector: 'app-chipsautocomplete',
  templateUrl: './chipsautocomplete.component.html',
  styleUrls: ['./chipsautocomplete.component.scss']
})
export class ChipsautocompleteComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  applicationCtrl = new FormControl();
  filteredApplications: Observable<string[]>;
  applications: string[];
  allApplications: string[];

  @ViewChild('applicationInput') applicationInput: ElementRef;
  
  @Output() onApplications: EventEmitter<any> = new EventEmitter<any>();

/**
 * 
 */
  constructor(private dashboardservice: DashboardService) {
    this.filteredApplications = this.applicationCtrl.valueChanges.pipe(
        startWith(null),
        map((application: string | null) => application ? this._filter(application) : this.allApplications.slice()));
  }
  ngOnInit(){
  /**
   * Service call to get list of all application names
   */
  this.dashboardservice.getApplicationDetails(localStorage.getItem('userid')).subscribe((results) => {
    this.allApplications = results;
},(error)=>{
    console.log("Error"+ error);
})
  }
/**
 * Adding chips to Accordion for display 
 */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add our application
    if ((value || '').trim()) {
      this.applications.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.applicationCtrl.setValue(null);
  }

/**
 * changefunction for applications
 */
  setStatistics() {
    this.onApplications.emit(this.applications);
  }
/**
 * Removing the Chips from Accordion
 * @param application 
 */
  remove(application: string): void {
    const index = this.applications.indexOf(application);
    if (index >= 0) {
      this.applications.splice(index, 1);
    }
  }
/**
 * 
 * @param event 
 */
  selected(event: MatAutocompleteSelectedEvent): void {
    this.applications.push(event.option.viewValue);
    this.applicationInput.nativeElement.value = '';
    this.applicationCtrl.setValue(null);
  }
/**
 * 
 * @param value 
 */
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allApplications.filter(application => application.toLowerCase().indexOf(filterValue) === 0);
  }
}
