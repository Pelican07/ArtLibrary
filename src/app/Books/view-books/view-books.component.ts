import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  public books: any = [];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
     // to load books during application initialisation
     this.loadBooks();
  }

  // method for loading all books. It is using the book service to getting data from the web API
  loadBooks() {
    this.bookService.getBooks()
    .subscribe(
       (bookData: any) => {
      console.log(bookData);
      this.books = bookData;
    });
  }

  // method to delete a book
  deleteBook(ID) {
    this.bookService.deleteBook(ID).subscribe(data => {
      this.loadBooks();
    });
  }

  // method for processing navigation. It has two input parameters. One is a path, and another one is book id.
   getNavigation(link: string, id: string){
    if (id === '') {
        this.router.navigate([link]);
    } else {
        this.router.navigate([link + '/' + id]);
    }
  }
}
