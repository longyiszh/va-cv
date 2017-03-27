import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router'; 

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { CvModule } from './cv/cv.module'

import { vacvRouting } from './app.route';

import { AppComponent } from './app.component';
import { Http404Component } from './http404/http404.component';

// a custom TranslateLoader
export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


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

    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }
    }),

    CvModule,

    vacvRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
