import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BookAccordionComponent } from '../../shared/components/book-accordion/book-accordion.component';
import { Book } from '../../core/models/book.model';
import { BookService } from '../../core/services/book.service';
import { ModalService } from '../../shared/services/modal.service';
import { CreateBookModalComponent } from '../../shared/components/create-book-modal/create-book-modal.component';
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

  constructor(
    private bookService: BookService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.loadBooks();
  }

  async loadBooks() {
    this.isLoading = true;
    try {
      const books = await firstValueFrom(this.bookService.getBooks());
      this.books = books || [];
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

  async openCreateBookModal() {
    const modal = await this.modalService.present(CreateBookModalComponent);
    const result = await modal.onWillDismiss();
    
    if (result.data?.success) {
      await this.loadBooks(); // Recargar la lista después de crear un libro
    }
  }
} 