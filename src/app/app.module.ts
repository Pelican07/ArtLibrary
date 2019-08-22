import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageHomeComponent } from './Home/page-home/page-home.component';
import { ButtonsHomeComponent } from './Home/buttons-home/buttons-home.component';
// Books
import { PageBooksComponent } from './Books/page-books/page-books.component';
import { ViewBooksComponent } from './Books/view-books/view-books.component';
import { CreateBooksComponent } from './Books/create-books/create-books.component';
import { ReadBooksComponent } from './Books/read-books/read-books.component';
import { UpdateBooksComponent } from './Books/update-books/update-books.component';
// Arts
import { PageArtsComponent } from './Arts/page-arts/page-arts.component';
import { ViewArtsComponent } from './Arts/view-arts/view-arts.component';
import { UpdateArtsComponent } from './Arts/update-arts/update-arts.component';
import { ReadArtsComponent } from './Arts/read-arts/read-arts.component';
import { CreateArtsComponent } from './Arts/create-arts/create-arts.component';
// Movies
import { PageMoviesComponent } from './Movies/page-movies/page-movies.component';
import { CreateMoviesComponent } from './Movies/create-movies/create-movies.component';
import { ReadMoviesComponent } from './Movies/read-movies/read-movies.component';
import { UpdateMoviesComponent } from './Movies/update-movies/update-movies.component';
import { ViewMoviesComponent } from './Movies/view-movies/view-movies.component';
// Auteurs
import { PageAuteursComponent } from './Auteurs/page-auteurs/page-auteurs.component';
import { ViewAuteursComponent } from './Auteurs/view-auteurs/view-auteurs.component';
import { UpdateAuteursComponent } from './Auteurs/update-auteurs/update-auteurs.component';
import { ReadAuteursComponent } from './Auteurs/read-auteurs/read-auteurs.component';
import { CreateAuteursComponent } from './Auteurs/create-auteurs/create-auteurs.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PageHomeComponent,
    ButtonsHomeComponent,
    PageBooksComponent,
    ViewBooksComponent,
    CreateBooksComponent,
    ReadBooksComponent,
    UpdateBooksComponent,
    PageArtsComponent,
    ViewArtsComponent,
    UpdateArtsComponent,
    ReadArtsComponent,
    CreateArtsComponent,
    PageAuteursComponent,
    ViewAuteursComponent,
    ReadAuteursComponent,
    UpdateAuteursComponent,
    CreateAuteursComponent,
    PageMoviesComponent,
    CreateMoviesComponent,
    ReadMoviesComponent,
    UpdateMoviesComponent,
    ViewMoviesComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
