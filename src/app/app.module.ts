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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PageHomeComponent,
    ButtonsHomeComponent,
    PageBooksComponent,
    ListBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
