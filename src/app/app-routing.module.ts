import { AboutComponent } from './Components/pages/about/about.component';
import { TodosComponent } from './Components/todos/todos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',  component: AboutComponent},
  { path: 'about',  component: TodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
