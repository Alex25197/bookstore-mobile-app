import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BooksPage } from '../../pages/books/books.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [SharedModule, BooksPage]
})
export class Tab2Page {
  constructor() {}
}
