import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaladPageComponent } from './salad-page/salad-page.component';

const routes: Routes = [
  {path:'', component: SaladPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaladRoutingModule { }
