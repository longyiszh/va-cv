import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MdCardModule
} from '@angular/material';


@NgModule({
  imports: [
    MdCardModule
  ],
  exports: [
    MdCardModule
  ]
})
export class MdModule { }
