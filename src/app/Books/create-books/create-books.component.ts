import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.css']
})
export class CreateBooksComponent implements OnInit {
   bookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) {
    // using the Validators for implementing the form validation
    this.bookForm = this.fb.group({
      titre: ['', Validators.required],
      nom: ['', Validators.compose([Validators.required])], 
      prenom: ['', Validators.compose([Validators.required])], 
      resume: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(1000)])],
    }); 
   }

  ngOnInit() {
  }

  // method for saving the book
  saveBook(values: { titre: string; nom: string; prenom: string; resume: string; }) {
    // we are using form data for preparing the form value. We avoid the JSON encoding and decoding method via HTTP requests.
    const bookData = new FormData();
    bookData.append('titre', values.titre);
    bookData.append('nom', values.nom);
    bookData.append('prenom', values.prenom);
    bookData.append('resume', values.resume);
    // accessing the create product service to save the product into the database
    this.bookService.createBook(bookData).subscribe(result => {
      // Once the product created successfully, we will redirect to the root page
      this.router.navigate(['pageBooks']);
    });
  }
}
