import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

/*
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type' = 'applicaton/jspn'
  })
};*/

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})

export class BooksListComponent implements OnInit {
  flag :string;
  books = [];
  bname :any = {name: "java"};
  public errorMsg;

  constructor(private data :DataService) {

  }

  ngOnInit() {
    // console.log("BooksListComponent");
    this.data.getBooks().subscribe(res => this.books = res,
                                    error => this.errorMsg = error)
    // console.log("book-list");
    // console.log("------",this.errorMsg);
    // console.log(this.books);
  }

  getBooks(){
    this.flag = 'index'
    // this.data.getBooks().subscribe(res => this.books = res,
                                    // error => this.errorMsg = error);
    console.log(this.errorMsg)
  }

  addBook(){
    this.flag = 'create'
  }

  submit()
  {
    //console.log("working");
    console.log(this.bname)
    this.data.addBook(this.bname).subscribe((res) => {
      this.books.push(res)
      // console.log("res",res)
      // console.log("==========", res, this.books)
    })
  }
}
