import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../shared.module';
import { BookService } from '../../../core/services/book.service';
import { ModalController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-create-book-modal',
  templateUrl: './create-book-modal.component.html',
  styleUrls: ['./create-book-modal.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class CreateBookModalComponent {
  bookForm: FormGroup;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private modalController: ModalController
  ) {
    this.bookForm = this.formBuilder.group({
      Title: ['', [Validators.required]],
      Author: ['', [Validators.required]],
      Isbn: ['', [Validators.required]]
    });
  }

  async onSubmit() {
    if (this.bookForm.valid) {
      this.isLoading = true;
      try {
        const payload = { ...this.bookForm.value, Available: true };
        await firstValueFrom(this.bookService.createBook(payload));
        await this.modalController.dismiss({ success: true });
      } catch (error) {
        console.error('Error creating book:', error);
      } finally {
        this.isLoading = false;
      }
    }
  }

  cancel() {
    this.modalController.dismiss();
  }
} 