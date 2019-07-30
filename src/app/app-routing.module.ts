import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from './Home/page-home/page-home.component';
import { PageBooksComponent } from './Books/page-books/page-books.component';
import { ListBooksComponent } from './Books/list-books/list-books.component';
import {ViewComponent} from './crud/view/view.component';
import {CreateComponent} from './crud/create/create.component';
import {UpdateComponent} from './crud/update/update.component';
import {ReadComponent} from './crud/read/read.component';


const routes: Routes = [
  {path: 'home', component: PageHomeComponent },
  {path: 'pageBooks', component: PageBooksComponent },
  {path: 'listBooks', component: ListBooksComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full'}
  {path: 'create', component: CreateComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: 'view/:id', component: ReadComponent},
  {path: '', component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
