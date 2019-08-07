import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  // base api url
  public url = 'http://localhost/web_api_library/art/';

  constructor(private http: HttpClient) { }

  getArts() {
    return this.http.get(this.url + 'view.php');
  }
}
