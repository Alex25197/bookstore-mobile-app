import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BookAccordionComponent } from '../../shared/components/book-accordion/book-accordion.component';
import { Book } from '../../core/models/book.model';
import { BookService } from '../../core/services/book.service';
import { ModalService } from '../../shared/services/modal.service';
import { CreateBookModalComponent } from '../../shared/components/create-book-modal/create-book-modal.component';
import { SelectUserModalComponent } from '../../shared/components/select-user-modal/select-user-modal.component';
import { UserService } from '../../core/services/user.service';
import { LoanService } from '../../core/services/loan.service';
import { firstValueFrom } from 'rxjs';
import { User } from '../../core/models/user.model';

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
    private modalService: ModalService,
    private userService: UserService,
    private loanService: LoanService
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
    // 1. Obtener usuarios sin préstamos activos
    const users: User[] = await firstValueFrom(this.userService.getUsers());
    const eligibleUsers = users.filter(u => !u.Loans || u.Loans.length === 0);
    if (eligibleUsers.length === 0) {
      alert('No hay usuarios disponibles para prestar este libro.');
      return;
    }
    // 2. Abrir modal para seleccionar usuario
    const modal = await this.modalService.present(SelectUserModalComponent, { users: eligibleUsers });
    const result = await modal.onWillDismiss();
    if (result.data?.userId) {
      // 3. Realizar el préstamo
      try {
        await firstValueFrom(this.loanService.loanBook(result.data.userId, book.Id));
        await this.loadBooks();
      } catch (error) {
        alert('Error al prestar el libro');
      }
    }
  }

  async openCreateBookModal() {
    const modal = await this.modalService.present(CreateBookModalComponent);
    const result = await modal.onWillDismiss();
    
    if (result.data?.success) {
      await this.loadBooks(); // Recargar la lista después de crear un libro
    }
  }

  async handleRefresh(event: any) {
    await this.loadBooks();
    event.target.complete();
  }
} 