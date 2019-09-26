import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-page-movies',
  templateUrl: './page-movies.component.html',
  styleUrls: ['./page-movies.component.css']
})
export class PageMoviesComponent implements OnInit {

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
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
