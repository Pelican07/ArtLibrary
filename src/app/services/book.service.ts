import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
   // base api url
   public url = 'http://localhost/web_api_library/book/';

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get(this.url + 'view.php');
  }
  getBookDetails(id: number) {
    return this.http.get(this.url + 'view_one.php?id=' + id);
  }
  createBook(data: any) {
    return this.http.post(this.url + 'create.php', data);
  }
  updateBook(data: any) {
    return this.http.post(this.url + 'update.php', data);
  }
  deleteBook(id: number) {
    return this.http.get(this.url + 'delete.php?id=' + id);
  }
}
