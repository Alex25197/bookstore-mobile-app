import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BookAccordionComponent } from '../../shared/components/book-accordion/book-accordion.component';
import { Book } from '../../core/models/book.model';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
  standalone: true,
  imports: [SharedModule, BookAccordionComponent]
})
export class BooksPage implements OnInit {
  books: Book[] = [];
  isLoading = false;

  constructor() {}

  ngOnInit() {
    this.loadBooks();
  }

  async loadBooks() {
    this.isLoading = true;
    try {
      // TODO: Implementar el servicio de libros
      // const books = await firstValueFrom(this.bookService.getBooks());
      // this.books = books || [];
      
      // Datos de prueba
      this.books = [
        {
          Id: 1,
          Title: 'El Señor de los Anillos',
          Author: 'J.R.R. Tolkien',
          Isbn: '978-0261102385',
          Available: true,
          CreatedAt: new Date().toISOString()
        },
        {
          Id: 2,
          Title: 'Cien años de soledad',
          Author: 'Gabriel García Márquez',
          Isbn: '978-0307474728',
          Available: false,
          CreatedAt: new Date().toISOString()
        }
      ];
    } catch (error) {
      console.error('Error loading books:', error);
      this.books = [];
    } finally {
      this.isLoading = false;
    }
  }

  async onLoanBook(book: Book) {
    // TODO: Implementar la lógica de préstamo
    console.log('Préstamo solicitado para:', book);
  }
} 