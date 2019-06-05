import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MainPageModule } from './MainPage/mainPage.module';

import { RouterModule, Router} from '@angular/router';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import { MainPageComponent } from './MainPage/mainPage.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
   // RouterModule.forRoot([{
  //     path:"",
  //     loadChildren: './MainPage/mainPage.module#MainPageModule'
  //   },{
  //     path:"todolist",
  //     loadChildren: './TodoListPage/toDo.module#ToDoModule'


  //   }
  // ])    ,
      HttpModule

  ],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppModule {}