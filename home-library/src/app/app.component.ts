import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //private url = "http://localhost:3000/book.json"
  public books;

  constructor(private http :HttpClient){
    // console.log("here")
    //
    // http.get("http://localhost:3000/book.json").subscribe(res => this.books = res)
    // console.log(this.books)
  }

  getBooks(){
    //return this.http.get(this.url)
  }
}
