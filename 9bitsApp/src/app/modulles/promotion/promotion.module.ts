import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionRoutingModule } from './promotion-routing.module';
import { DefinitionComponent } from './components/definition/definition.component';
import { SummaryComponent } from './components/summary/summary.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    DefinitionComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    PromotionRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatRadioModule,
    FormsModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatIconModule
  ]
})
export class PromotionModule { }
