import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageHomeComponent } from './Home/page-home/page-home.component';
import { ButtonsHomeComponent } from './Home/buttons-home/buttons-home.component';
import { PageBooksComponent } from './Books/page-books/page-books.component';
import { ListBooksComponent } from './Books/list-books/list-books.component';
import { ViewComponent } from './crud/view/view.component';
import { CreateComponent } from './crud/create/create.component';
import { UpdateComponent } from './crud/update/update.component';
import { ReadComponent } from './crud/read/read.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PageArtsComponent } from './Arts/page-arts/page-arts.component';
import { ViewArtsComponent } from './Arts/view-arts/view-arts.component';
import { UpdateArtsComponent } from './Arts/update-arts/update-arts.component';
import { ReadArtsComponent } from './Arts/read-arts/read-arts.component';
import { CreateArtsComponent } from './Arts/create-arts/create-arts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PageHomeComponent,
    ButtonsHomeComponent,
    PageBooksComponent,
    ListBooksComponent,
    ViewComponent,
    CreateComponent,
    UpdateComponent,
    ReadComponent,
    PageArtsComponent,
    ViewArtsComponent,
    UpdateArtsComponent,
    ReadArtsComponent,
    CreateArtsComponent
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
