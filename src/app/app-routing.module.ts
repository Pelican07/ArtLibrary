import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from './Home/page-home/page-home.component';
import { PageBooksComponent } from './Books/page-books/page-books.component';
import { ListBooksComponent } from './Books/list-books/list-books.component';

const routes: Routes = [
  {path: 'home', component: PageHomeComponent },
  {path: 'pageBooks', component: PageBooksComponent },
  {path: 'listBooks', component: ListBooksComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
