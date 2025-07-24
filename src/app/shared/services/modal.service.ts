import { Injectable } from '@angular/core';
import { ModalController, ModalOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private modalController: ModalController) {}

  async present(component: any, props?: any, cssClass: string = '') {
    const options: ModalOptions = {
      component,
      componentProps: props,
      cssClass,
      backdropDismiss: false,
      breakpoints: [0, 0.5, 0.75, 1],
      initialBreakpoint: 0.75
    };

    const modal = await this.modalController.create(options);
    await modal.present();
    return modal;
  }

  async dismiss(data?: any) {
    return await this.modalController.dismiss(data);
  }
} 