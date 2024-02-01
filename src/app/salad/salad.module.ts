import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaladRoutingModule } from './salad-routing.module';
import { SaladPageComponent } from './salad-page/salad-page.component';
import { ToppingListComponent } from './topping-list/topping-list.component';


@NgModule({
  declarations: [
    SaladPageComponent,
    ToppingListComponent
  ],
  imports: [
    CommonModule,
    SaladRoutingModule
  ]
})
export class SaladModule { }
