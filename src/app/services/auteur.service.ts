import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuteurService {
  // base api url
  public url = 'http://localhost/web_api_library/auteur/';

  constructor(private http: HttpClient) { }

  getAuteur() {
    return this.http.get(this.url + 'view.php');
  }
  getAuteurDetails(id: number) {
    return this.http.get(this.url + 'view_one.php?id=' + id);
  }
  createAuteur(data: any) {
    return this.http.post(this.url + 'create.php', data);
  }
  updateAuteur(data: any) {
    return this.http.post(this.url + 'update.php', data);
  }
  deleteAuteur(id: number) {
    return this.http.get(this.url + 'delete.php?id=' + id);
  }
}
