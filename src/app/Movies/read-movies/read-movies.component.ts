import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-movies',
  templateUrl: './read-movies.component.html',
  styleUrls: ['./read-movies.component.css']
})
export class ReadMoviesComponent implements OnInit {
  movieID: any; // Getting movie id from URL
  movieData: any; // Getting movie details

  constructor(
    private movieService: MovieService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
     // to get the movie id from URL, use ActivatedRoute fonctionnality
     this.movieID = this.actRoute.snapshot.params.id;
     this.loadMovieDetails(this.movieID);
  }

  loadMovieDetails(movieID: number) {
    this.movieService.getMovieDetails(movieID)
    // access to the CRUD service and got detail
    .subscribe(movie => {
      console.log('movieid:', movieID);
      this.movieData = movie;
      console.log(this.movieData);
    // movie details saved into movieData property
    });
  }

  navigation(link: any) {
    this.router.navigate([link]);
  }

}
