import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-movies',
  templateUrl: './create-movies.component.html',
  styleUrls: ['./create-movies.component.css']
})
export class CreateMoviesComponent implements OnInit {
  movieForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private router: Router
  ) {
    // using the Validators for implementing the form validation
    this.movieForm = this.fb.group({
      titre: ['', Validators.required],
      nom: ['', Validators.compose([Validators.required])], 
      prenom: ['', Validators.compose([Validators.required])], 
      annee: ['', Validators.compose([Validators.required])], 
      resume: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(1000)])],
    });
   }

  ngOnInit() {
  }

   // method for saving the book
   saveMovie(values: { titre: string; nom: string; prenom: string; annee: string; resume: string; }) {
    // we are using form data for preparing the form value. We avoid the JSON encoding and decoding method via HTTP requests.
    const movieData = new FormData();
    movieData.append('titre', values.titre);
    movieData.append('nom', values.nom);
    movieData.append('prenom', values.prenom);
    movieData.append('annee', values.annee);
    movieData.append('resume', values.resume);
    // accessing the create product service to save the product into the database
    this.movieService.createMovie(movieData).subscribe(result => {
      // Once the product created successfully, we will redirect to the root page
      this.router.navigate(['pageMovies']);
    });
  }

}
