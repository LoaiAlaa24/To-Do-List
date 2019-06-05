import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToDoComponent } from './toDo.component';

const routes: Routes = [
  {
    path: '',
    component: ToDoComponent,
    children: [


    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ToDoRoutingModule {}
