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



  public books;
  public books_list;
  constructor(private http :HttpClient) { }

  getBooks():Observable<IBook[]>{
    let url = "http://localhost:3000/book.json";

    return this.http.get<IBook[]>(url)
                    .catch(this.errorHandler);
  }
  errorHandler(error :HttpErrorResponse){
    return Observable.throw(error.message || "server error")
  }

  addBook(book: IBook): Observable<IBook[]>{
    let url =  "http://localhost:3000/book";
    console.log(book)
    return this.http.post<IBook[]>(url,book)
                    .catch(this.errorHandler)
  }

  deleteBook(id: number):Observable<IBook[]>{
    let url = `http://localhost:3000/book/${id}`;

    return this.http.delete(url)//.subscribe(res => console.log(res))
                    .catch(this.errorHandler)
  }
  updateBook(id :number,book :IBook):Observable<IBook>{
    console.log(id,book)
    let url = `http://localhost:3000/book/${id}`
    console.log(url)
    return this.http.put<IBook>(url,book)
  }
}
