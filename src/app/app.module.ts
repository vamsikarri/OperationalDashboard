import { BrowserModule } from '@angular/platform-browser';

 
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AirflowComponent } from './airflow/airflow.component';

import { DraggableModule } from '../app/draggable/draggable.module';
import { RunstatsComponent } from './runstats/runstats.component';
import { WaitstatsComponent } from './waitstats/waitstats.component';
import { CompletedstatsComponent } from './completedstats/completedstats.component';
import { FailedstatsComponent } from './failedstats/failedstats.component';
import { MissedstatsComponent } from './missedstats/missedstats.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ChipsautocompleteComponent } from './chipsautocomplete/chipsautocomplete.component';


import { PlotlyjsComponent } from './plotlyjs/plotlyjs.component';
import { HelpComponent } from './help/help.component';

import { DashboardService } from '../app/dashboard.service';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app/shared/app.routing';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AirflowComponent,
    RunstatsComponent,
    WaitstatsComponent,
    CompletedstatsComponent,
    FailedstatsComponent,
    MissedstatsComponent,
    SnackbarComponent,
    ChipsautocompleteComponent,
    PlotlyjsComponent,
    HelpComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatChipsModule,
    DraggableModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  entryComponents:[
    RunstatsComponent,
    WaitstatsComponent,
    CompletedstatsComponent,
    FailedstatsComponent,
    MissedstatsComponent,
    AirflowComponent,
    RegistrationComponent,
    HelpComponent
  ],
  providers: [DashboardService, {provide: LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
