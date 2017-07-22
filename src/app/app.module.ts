/* @angular modules s */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router'; 
/* @angular modules e */

/* ngx-translate modules s */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
/* ngx-translate modules e */

import 'hammerjs';
import { MdModule } from './utilModule/md.module';

import { CvModule } from './cv/cv.module'

import { vacvRouting } from './app.route';

import { AppComponent } from './app.component';
import { Http404Component } from './http404/http404.component';

// a custom TranslateLoader
export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const angularModules = [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
];

@NgModule({
  declarations: [
    AppComponent,

    Http404Component
  ],
  imports: [
    angularModules,
    MdModule,

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
