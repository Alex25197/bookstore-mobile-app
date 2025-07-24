import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [SharedModule, IonicModule]
})
export class TabsPage {
  constructor() {}
}
