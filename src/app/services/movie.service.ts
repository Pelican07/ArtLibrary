import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // base api url
  public url = 'http://localhost/web_api_library/movie/';

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get(this.url + 'view.php');
  }
  getMovieDetails(id: number) {
    return this.http.get(this.url + 'view_one.php?id=' + id);
  }
  createMovie(data: any) {
    return this.http.post(this.url + 'create.php', data);
  }
  updateMovie(data: any) {
    return this.http.post(this.url + 'update.php', data);
  }
  deleteMovie(id: number) {
    return this.http.get(this.url + 'delete.php?id=' + id);
  }
}
