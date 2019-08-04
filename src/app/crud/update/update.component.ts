import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  bookForm: FormGroup;
  bookID: any;
  bookData: any;

  constructor(
    private crudService: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private actRoute: ActivatedRoute
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
    this.bookID = this.actRoute.snapshot.params.id;
    this.loadBookDetails(this.bookID);
  }

  loadBookDetails(bookID) {
    this.crudService.getBookDetails(bookID).subscribe(book => {
      this.bookData = book;
      this.bookForm.controls['titre'].setValue(this.bookData['titre']);
      this.bookForm.controls['nom'].setValue(this.bookData['nom_auteur']);
      this.bookForm.controls['prenom'].setValue(this.bookData['prenom_auteur']);
      this.bookForm.controls['resume'].setValue(this.bookData['resume']);
    });
  }

  updateBookData(values) {
    const bookData = new FormData();
    bookData.append('id', this.bookID);
    bookData.append('titre', values.titre);
    bookData.append('nom', values.nom);
    bookData.append('prenom', values.prenom);
    bookData.append('resume', values.resume);
    this.crudService.updateBook(bookData).subscribe(result => {
      this.router.navigate(['']);
    });
  }
}
