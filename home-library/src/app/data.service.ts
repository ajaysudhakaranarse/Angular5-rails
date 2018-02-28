import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IBook } from './book';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class DataService {

  private url = "http://localhost:3000/book.json";
  private url1 = "http://localhost:3000/book";
  public books;
  public books_list;
  constructor(private http :HttpClient) { }

  getBooks():Observable<IBook[]>{
    return this.http.get<IBook[]>(this.url)
                    .catch(this.errorHandler);
  }
  errorHandler(error :HttpErrorResponse){
    return Observable.throw(error.message || "server error")
  }

  addBook(book: IBook): Observable<IBook[]>{
    //console.log("-----addMethod",book);
    return this.http.post<IBook[]>(this.url1,book)
                    .catch(this.errorHandler)
  }
}
