import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from './Home/page-home/page-home.component';
// Books
import { PageBooksComponent } from './Books/page-books/page-books.component';
import { ViewBooksComponent } from './Books/view-books/view-books.component';
// Crud
import {ViewComponent} from './crud/view/view.component';
import {CreateComponent} from './crud/create/create.component';
import {UpdateComponent} from './crud/update/update.component';
import {ReadComponent} from './crud/read/read.component';
// Arts
import { PageArtsComponent } from './Arts/page-arts/page-arts.component';
import { CreateArtsComponent } from './Arts/create-arts/create-arts.component';
import { UpdateArtsComponent } from './Arts/update-arts/update-arts.component';
import { ReadArtsComponent } from './Arts/read-arts/read-arts.component';


const routes: Routes = [
  {path: 'home', component: PageHomeComponent },
  {path: 'pageBooks', component: PageBooksComponent },
  {path: 'viewBooks', component: ViewBooksComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full'}
  {path: 'create', component: CreateComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: 'read/:id', component: ReadComponent},
  {path: 'homeViewBooks', component: ViewComponent},
  {path: 'pageArts', component: PageArtsComponent },
  {path: 'createArt', component: CreateArtsComponent},
  {path: 'updateArt/:id', component: UpdateArtsComponent},
  {path: 'readArt/:id', component: ReadArtsComponent},
  {path: '', component: PageHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
