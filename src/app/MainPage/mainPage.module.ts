import { NgModule } from '@angular/core';

import { MainPageRoutingModule } from './mainPage-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './mainPage.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [MainPageRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule],
  declarations: [MainPageComponent],
  entryComponents: [],
  providers: []
})
export class MainPageModule {}
