import { Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [SharedModule, IonicModule]
})
export class AppComponent {
  constructor() {}
}
