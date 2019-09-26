import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-books',
  templateUrl: './page-books.component.html',
  styleUrls: ['./page-books.component.css']
})
export class PageBooksComponent implements OnInit {

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
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
