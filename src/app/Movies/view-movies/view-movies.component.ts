import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-movies',
  templateUrl: './view-movies.component.html',
  styleUrls: ['./view-movies.component.css']
})
export class ViewMoviesComponent implements OnInit {
  public movies: any = [];

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
     // to load movies during application initialisation
     this.loadMovies();
  }

  // method for loading all movies. It is using the movie service to getting data from the web API
  loadMovies() {
    this.movieService.getMovies()
    .subscribe(
       (movieData: any) => {
      console.log(movieData);
      this.movies = movieData;
    });
  }

  // method to delete a movie
  deleteMovie(ID) {
    this.movieService.deleteMovie(ID).subscribe(data => {
      this.loadMovies();
    });
  }

  // method for processing navigation. It has two input parameters. One is a path, and another one is movie id.
   getNavigation(link: string, id: string){
    if (id === '') {
        this.router.navigate([link]);
    } else {
        this.router.navigate([link + '/' + id]);
    }
  }

}
