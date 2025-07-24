import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BaseModalComponent } from '../base-modal/base-modal.component';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-example-modal',
  template: `
    <app-base-modal 
      [title]="'Ejemplo de Modal'" 
      (dismissModal)="onDismiss()"
      [showBackButton]="true"
      (backClicked)="onBack()">
      
      <div class="ion-padding">
        <h2>Contenido del Modal</h2>
        <p>Este es un ejemplo de cómo usar el modal base.</p>
      </div>

      <div footer>
        <ion-button expand="block" (click)="onDismiss()">
          Cerrar Modal
        </ion-button>
      </div>
    </app-base-modal>
  `,
  standalone: true,
  imports: [IonicModule, BaseModalComponent]
})
export class ExampleModalComponent {
  constructor(private modalService: ModalService) {}

  onDismiss() {
    this.modalService.dismiss();
  }

  onBack() {
    // Lógica para el botón de retroceso
    console.log('Back clicked');
  }
} 