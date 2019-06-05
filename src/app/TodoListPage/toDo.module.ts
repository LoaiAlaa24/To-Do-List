import { NgModule } from '@angular/core';

import { ToDoRoutingModule } from './toDo-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToDoComponent } from './toDo.component';
import { HttpClientModule } from '@angular/common/http';

import {CommonModule} from '@angular/common';
@NgModule({
  imports: [ToDoRoutingModule,
      FormsModule,
      CommonModule,
      ReactiveFormsModule,
      HttpClientModule],
  declarations: [ToDoComponent],
  entryComponents: [],
  providers: []
})
export class ToDoModule {}
