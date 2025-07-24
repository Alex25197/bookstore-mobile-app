import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { User } from '../../../core/models/user.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-user-modal',
  templateUrl: './select-user-modal.component.html',
  styleUrls: ['./select-user-modal.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class SelectUserModalComponent {
  @Input() users: User[] = [];
  selectedUserId: number | null = null;

  constructor(private modalController: ModalController) {}

  selectUser(userId: number) {
    this.selectedUserId = userId;
  }

  confirm() {
    if (this.selectedUserId) {
      this.modalController.dismiss({ userId: this.selectedUserId });
    }
  }

  cancel() {
    this.modalController.dismiss();
  }
} 