import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UsersPage } from '../../pages/users/users.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [SharedModule, UsersPage]
})
export class Tab1Page {
  constructor() {}
}
