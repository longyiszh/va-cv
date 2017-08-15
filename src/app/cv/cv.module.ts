import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { MdModule } from '../utilModule/md.module';

import { CvService } from './cv.service';

import { CvComponent } from './cv.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    LazyLoadImageModule,

    MdModule
  ],
  declarations: [
    CvComponent
  ],
  providers: [CvService]
})
export class CvModule { }
