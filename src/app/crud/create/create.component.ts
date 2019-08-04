import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  bookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private crudService: CrudService,
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
    this.crudService.createBook(bookData).subscribe(result => {
      // Once the product created successfully, we will redirect to the root page
      this.router.navigate(['']);
    });
  }
}
