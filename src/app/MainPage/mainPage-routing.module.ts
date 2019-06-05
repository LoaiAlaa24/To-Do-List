import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './mainPage.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MainPageRoutingModule {}
