import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; 

import { TranslateModule } from 'ng2-translate';

import { CvModule } from './cv/cv.module'

import { vacvRouting } from './app.route';

import { AppComponent } from './app.component';
import { Http404Component } from './http404/http404.component';


@NgModule({
  declarations: [
    AppComponent,

    Http404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,

    TranslateModule.forRoot(),

    CvModule,

    vacvRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
