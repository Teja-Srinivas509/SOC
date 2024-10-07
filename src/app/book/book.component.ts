import { Component } from '@angular/core';
import { BookService } from '../eight-b/book.service';
import { Book } from '../eight-b/book';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  books!: Book[];
  selectedBook?: Book;
  constructor(private bookService: BookService) { }
  getBooks() {
    this.books = this.bookService.getBooks();
  }


  ngOnInit(): void {
    this.fetchBooks();  }

  fetchBooks(): void {
    this.books = this.bookService.getBooks();
  }
  
  onSelect(book: Book): void {
    console.log('Selected book:', book);  
    this.selectedBook = book;
  }
  
}
