import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { Book } from '../../../core/models/book.model';

@Component({
  selector: 'app-book-accordion',
  templateUrl: './book-accordion.component.html',
  styleUrls: ['./book-accordion.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class BookAccordionComponent {
  @Input() books: Book[] = [];
  @Output() loanBook = new EventEmitter<Book>();

  isExpanded: { [key: number]: boolean } = {};

  toggleAccordion(bookId: number) {
    this.isExpanded[bookId] = !this.isExpanded[bookId];
  }

  onLoanBook(book: Book, event: Event) {
    event.stopPropagation();
    this.loanBook.emit(book);
  }
} 