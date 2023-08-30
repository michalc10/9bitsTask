import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

const routes: Routes = [
  {
    path:'',
    component:SidebarComponent,
    loadChildren:() => import('./modulles/promotion/promotion.module').then(m => m.PromotionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
