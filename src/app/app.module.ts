import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RatesComponent } from './rates/rates.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { SelectdataComponent } from './selectdata/selectdata.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RatesComponent,
    HeaderComponent,
    LoaderComponent,
    SelectdataComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
