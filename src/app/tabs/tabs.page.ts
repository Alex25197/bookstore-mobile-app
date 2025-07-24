import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Tab1Page } from './tab1/tab1.page';
import { Tab2Page } from './tab2/tab2.page';
import { Tab3Page } from './tab3/tab3.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [SharedModule, Tab1Page, Tab2Page, Tab3Page]
})
export class TabsPage {
  constructor() {}
}
