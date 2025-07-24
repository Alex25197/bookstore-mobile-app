import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-user-accordion',
  templateUrl: './user-accordion.component.html',
  styleUrls: ['./user-accordion.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class UserAccordionComponent {
  @Input() users: User[] = [];
} 