import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksListComponent } from './books-list/books-list.component'
// import { HttpModule } from '@angular/http';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
