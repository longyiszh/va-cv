import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { CvService } from './cv.service';

import { CvComponent } from './cv.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    CvComponent
  ],
  providers: [CvService]
})
export class CvModule { }
