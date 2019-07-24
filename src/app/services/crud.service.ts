import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // base api url
  public url = 'http://localhost/web_api_library/';

  constructor(private http: HttpClient) { }
}

getBooks(){
  return this.http.get(this.url + 'view.php');
}

getBookDetails(id){
  return this.http.get(this.url + 'view_one.php?id=' + id);
}

createBook(data){
  return this.http.post(this.url + 'create.php', data);
}

updateBook(data){
  return this.http.post(this.url + 'update.php', data);
}

deleteBook(id){
  return this.http.get(this.url + 'delete.php?id=' + id);
}
