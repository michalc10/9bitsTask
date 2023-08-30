import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionRoutingModule } from './promotion-routing.module';
import { DefinitionComponent } from './components/definition/definition.component';
import { SummaryComponent } from './components/summary/summary.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    DefinitionComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    PromotionRoutingModule,
    MatInputModule
  ]
})
export class PromotionModule { }
