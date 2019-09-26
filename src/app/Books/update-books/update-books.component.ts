import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']

})
export class UpdateBooksComponent implements OnInit {
  bookForm: FormGroup;
  bookID: any;
  bookData: any;
  formGroup: any;
  bookImageFile: File;
  @ViewChild('image', {static: true}) bookImage: ElementRef;

  constructor(
    private bookService: BookService,
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
      image: ['', Validators.compose([Validators.required])]
      // lien: ['', Validators.compose([Validators.required])],
    });
   }

  ngOnInit() {
    this.bookID = this.actRoute.snapshot.params.id;
    this.loadBookDetails(this.bookID);
  }

  loadBookDetails(bookID) {
    this.bookService.getBookDetails(bookID).subscribe(book => {
      this.bookData = book;
      this.bookForm.controls['titre'].setValue(this.bookData['titre']);
      this.bookForm.controls['nom'].setValue(this.bookData['nom_auteur']);
      this.bookForm.controls['prenom'].setValue(this.bookData['prenom_auteur']);
      this.bookForm.controls['resume'].setValue(this.bookData['resume']);
      this.bookForm.controls['image'].setValue(this.bookData['image']);
      // this.bookForm.controls['lien'].setValue(this.bookData['lien']);
    });
  }

  updateBookData(values) {
    console.log(values.image);
    const fileImage = this.bookImage.nativeElement;
    if (fileImage.files && fileImage.files[0]) {
      this.bookImageFile = fileImage.files[0];
    }
    const testFile: File = this.bookImageFile;
   // console.log(testFile);

    const bookData = new FormData();
    bookData.append('id', this.bookID);
    bookData.append('titre', values.titre);
    bookData.append('nom', values.nom);
    bookData.append('prenom', values.prenom);
    bookData.append('resume', values.resume);
    bookData.append('image', testFile, testFile.name);
    // bookData.append('lien', values.lien);
    this.bookService.updateBook(bookData).subscribe(result => {
      console.log(result);
      this.router.navigate(['pageBooks']);
    });
  }

}
