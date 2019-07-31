import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  bookID: any; // Getting Book id from URL
  bookData: any; // Getting Book details

  constructor(
    private crudService: CrudService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // to get the book id from URL, use ActivatedRoute fonctionnality
    this. bookID = this.actRoute.snapshot.params['id'];
    this.loadBookDetails(this.bookID);
  }

  loadBookDetails(bookID: number) {
    this.crudService.getBookDetails(bookID)
    // access to the CRUD service and got detail
    .subscribe(book => {this.bookData = book;
    // book details saved into bookData property
    });
  }

  navigation(link: any){
    this.router.navigate([link]);
  }
}
