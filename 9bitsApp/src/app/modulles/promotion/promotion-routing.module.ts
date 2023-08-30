import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefinitionComponent } from './components/definition/definition.component';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Routes = [
  { path: "", redirectTo: "definition", pathMatch: 'full' },
  { path: "definition",component:DefinitionComponent },
  { path: "summary",component:SummaryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionRoutingModule { }
