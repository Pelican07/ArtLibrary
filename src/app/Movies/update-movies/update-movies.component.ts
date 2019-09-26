import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-movies',
  templateUrl: './update-movies.component.html',
  styleUrls: ['./update-movies.component.css']
})
export class UpdateMoviesComponent implements OnInit {
  movieForm: FormGroup;
  movieID: any;
  movieData: any;


  constructor(
    private movieService: MovieService,
    private router: Router,
    private fb: FormBuilder,
    private actRoute: ActivatedRoute
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
    this.movieID = this.actRoute.snapshot.params.id;
    this.loadMovieDetails(this.movieID);
  }

  loadMovieDetails(movieID) {
    this.movieService.getMovieDetails(movieID).subscribe(movie => {
      this.movieData = movie;
      this.movieForm.controls['titre'].setValue(this.movieData['titre_film']);
      this.movieForm.controls['nom'].setValue(this.movieData['nom_realisateur']);
      this.movieForm.controls['prenom'].setValue(this.movieData['prenom_realisateur']);
      this.movieForm.controls['annee'].setValue(this.movieData['annee']);
      this.movieForm.controls['resume'].setValue(this.movieData['resume_film']);
    });
  }

  updateMovieData(values) {
    const movieData = new FormData();
    movieData.append('id', this.movieID);
    movieData.append('titre', values.titre);
    movieData.append('nom', values.nom);
    movieData.append('prenom', values.prenom);
    movieData.append('annee', values.annee);
    movieData.append('resume', values.resume);
    this.movieService.updateMovie(movieData).subscribe(result => {
      this.router.navigate(['pageMovies']);
    });
  }
}
