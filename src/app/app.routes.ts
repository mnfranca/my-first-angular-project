import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'todo', component: TodoPageComponent },
];
