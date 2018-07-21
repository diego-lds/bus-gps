import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { BusDialogComponent} from './bus-dialog/bus-dialog.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import {MatDialogModule} from '@angular/material/dialog';
import { OnibusService } from 'app/onibus.service';
import { AgmCoreModule } from '@agm/core';
import {MatToolbarModule} from '@angular/material/toolbar';








@NgModule({
  declarations: [
    AppComponent,
    BusDialogComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatToolbarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDXEgnfRRG3eS_S1lnaq1ViewUeD2PFlk'
    })
    
  ],
  providers: [
    OnibusService
  ],
  entryComponents: [
    BusDialogComponent,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
