import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigService } from './app.component'
;import { HttpClientModule } from '@angular/common/http';
  
// UI n  
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import { HttpClient, HttpHandler } from '@angular/common/http';

@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ConfigService,
    HttpClient,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
