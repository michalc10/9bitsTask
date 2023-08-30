import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefinitionComponent } from './components/definition/definition.component';
import { SummaryComponent } from './components/summary/summary.component';
import { LoremIpsumComponent } from '../shared/components/lorem-ipsum/lorem-ipsum.component';

const routes: Routes = [
  { path: "", redirectTo: "definition", pathMatch: 'full' },
  { path: "definition", component: DefinitionComponent },
  { path: "summary", component: SummaryComponent },
  { path: "lorem-ipsum", component: LoremIpsumComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionRoutingModule { }
