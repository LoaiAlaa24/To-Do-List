import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './MainPage/mainPage.module#MainPageModule'
  },
    {
        path:"todolist",
        loadChildren: './TodoListPage/toDo.module#ToDoModule'
    },
   
  { path: '', redirectTo: '', pathMatch: 'full' },

  { path: '**', redirectTo: '' }
];

const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
