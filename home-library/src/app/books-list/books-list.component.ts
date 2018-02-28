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
  update_name :any = {};
  update_id :number;
  new_book = {};
  public errorMsg;

  constructor(private data :DataService) {

  }

  ngOnInit() {
    this.data.getBooks().subscribe(res => this.books = res,
                                    error => this.errorMsg = error)
  }

  getBooks(){
    this.flag = 'index'
  }

  addBook(){
    this.flag = 'create'
  }

  deleteBook(index){
    //debugger
    console.log(index)
    this.data.deleteBook(index).subscribe((res) =>
                                (this.data.getBooks()
                                .subscribe(res => this.books = res,
                                              error => this.errorMsg = error)))
    this.flag = 'index'
  }

  updateBook(id,name){
    this.flag = 'update'
    this.update_name.name = name
    this.update_id = id
    console.log(name)
  }
  update(){
      this.data.updateBook(this.update_id,this.update_name).subscribe(res => {
        for(let i = 0; i < this.books.length; i++)
        {
          if (res.id == this.books[i]['id'])
          {
//            console.log("match")
            this.books[i]['name'] = res.name
          }
        }
      })
       console.log("U books",this.books)
       console.log("new",this.new_book)
  }

  submit()
  {
    this.data.addBook(this.bname).subscribe((res) => {
      this.books.push(res)          // to add response in books.
    })
  }
}
