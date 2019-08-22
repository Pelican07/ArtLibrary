import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-books',
  templateUrl: './read-books.component.html',
  styleUrls: ['./read-books.component.css']
})
export class ReadBooksComponent implements OnInit {
  bookID: any; // Getting Book id from URL
  bookData: any; // Getting Book details

  constructor(
    private bookService: BookService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // to get the book id from URL, use ActivatedRoute fonctionnality
    this.bookID = this.actRoute.snapshot.params.id;
    this.loadBookDetails(this.bookID);
  }

  loadBookDetails(bookID: number) {
    this.bookService.getBookDetails(bookID)
    // access to the CRUD service and got detail
    .subscribe(book => {
      console.log('bookid:', bookID);
      this.bookData = book;
      console.log(this.bookData);
    // book details saved into bookData property
    });
  }

  navigation(link: any) {
    this.router.navigate([link]);
  }
}
