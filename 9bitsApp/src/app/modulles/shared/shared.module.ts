import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LoremIpsumComponent } from './components/lorem-ipsum/lorem-ipsum.component';


@NgModule({
  declarations: [
    LoremIpsumComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
