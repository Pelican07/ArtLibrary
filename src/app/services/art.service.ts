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
  getArtDetails(id: number) {
    return this.http.get(this.url + 'view_one.php?id=' + id);
  }
  createArt(data: any) {
    return this.http.post(this.url + 'create.php', data);
  }
  updateArt(data: any) {
    return this.http.post(this.url + 'update.php', data);
  }
  deleteArt(id: number) {
    return this.http.get(this.url + 'delete.php?id=' + id);
  }
}
