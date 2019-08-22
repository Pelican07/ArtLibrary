import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Home
import { PageHomeComponent } from './Home/page-home/page-home.component';
// Books
import { PageBooksComponent } from './Books/page-books/page-books.component';
import { CreateBooksComponent } from './Books/create-books/create-books.component';
import { UpdateBooksComponent } from './Books/update-books/update-books.component';
import { ReadBooksComponent } from './Books/read-books/read-books.component';
// Arts
import { PageArtsComponent } from './Arts/page-arts/page-arts.component';
import { CreateArtsComponent } from './Arts/create-arts/create-arts.component';
import { UpdateArtsComponent } from './Arts/update-arts/update-arts.component';
import { ReadArtsComponent } from './Arts/read-arts/read-arts.component';
// Movies
import { PageMoviesComponent } from './Movies/page-movies/page-movies.component';
import { CreateMoviesComponent } from './Movies/create-movies/create-movies.component';
import { UpdateMoviesComponent } from './Movies/update-movies/update-movies.component';
import { ReadMoviesComponent } from './Movies/read-movies/read-movies.component';
// Auteurs
import { PageAuteursComponent } from './Auteurs/page-auteurs/page-auteurs.component';
import { CreateAuteursComponent } from './Auteurs/create-auteurs/create-auteurs.component';
import { UpdateAuteursComponent } from './Auteurs/update-auteurs/update-auteurs.component';
import { ReadAuteursComponent } from './Auteurs/read-auteurs/read-auteurs.component';


const routes: Routes = [
  {path: 'home', component: PageHomeComponent },
  // Books
  {path: 'pageBooks', component: PageBooksComponent },
  {path: 'createBook', component: CreateBooksComponent },
  {path: 'updateBook/:id', component: UpdateBooksComponent },
  {path: 'readBook/:id', component: ReadBooksComponent },
  // Arts
  {path: 'pageArts', component: PageArtsComponent },
  {path: 'createArt', component: CreateArtsComponent},
  {path: 'updateArt/:id', component: UpdateArtsComponent},
  {path: 'readArt/:id', component: ReadArtsComponent},
  // Movies
  {path: 'pageMovies', component: PageMoviesComponent },
  {path: 'createMovie', component: CreateMoviesComponent },
  {path: 'updateMovie/:id', component: UpdateMoviesComponent },
  {path: 'readMovie/:id', component: ReadMoviesComponent },
  // Auteurs
  {path: 'pageAuteurs', component: PageAuteursComponent },
  {path: 'createAuteurs', component: CreateAuteursComponent},
  {path: 'updateAuteurs/:id', component: UpdateAuteursComponent},
  {path: 'readAuteurs/:id', component: ReadAuteursComponent},
  
  {path: '', component: PageHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
