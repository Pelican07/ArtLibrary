import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';
// variable $ to accessing the jquery elements into our angular application
declare var $;
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  // providers: [ CrudService ]
})
export class ViewComponent implements OnInit {
  public books: any = [];
  // @ViewChild ('booksTable') Table;
  // public dataTable: any;
 
  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit() {
    // to load books during application initialisation
    this.loadBooks();
  }

  // method for loading all products. It is using the crud service to getting data from the web API
  loadBooks() {
    this.crudService.getBooks()
    .subscribe(
       (bookData: any) => {
      console.log(bookData);
      this.books = bookData;
    }
        /* bookData => {
          this.books = bookData;
          // initialize datatables after the data render
          this.dataTable = $(this.Table.nativeElement);
          setTimeout(() => {this.dataTable.DataTable(); } , 2000); 
        }*/
    );
  }

  // method to delete a book
  deleteBook(ID) {
    this.crudService.deleteBook(ID).subscribe(data => {
      this.loadBooks();
    });
  }

  // method for processing navigation. It has two input parameters. One is a path, and another one is product id.
   getNavigation(link: string, id: string){
    if (id === '') {
        this.router.navigate([link]);
    } else {
        this.router.navigate([link + '/' + id]);
    }
  }
}
