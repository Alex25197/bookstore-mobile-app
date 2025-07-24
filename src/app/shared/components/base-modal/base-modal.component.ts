import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class BaseModalComponent {
  @Input() title: string = '';
  @Input() showCloseButton: boolean = true;
  @Input() showBackButton: boolean = false;
  @Input() modalClass: string = '';

  @Output() dismissModal = new EventEmitter<void>();
  @Output() backClicked = new EventEmitter<void>();

  onDismiss() {
    this.dismissModal.emit();
  }

  onBack() {
    this.backClicked.emit();
  }
} 