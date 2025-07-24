import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { User } from '../../../core/models/user.model';
import { ModalService } from '../../services/modal.service';
import { LoanDetailModalComponent } from '../loan-detail-modal/loan-detail-modal.component';

@Component({
  selector: 'app-user-accordion',
  templateUrl: './user-accordion.component.html',
  styleUrls: ['./user-accordion.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class UserAccordionComponent {
  @Input() users: User[] = [];

  constructor(private modalService: ModalService) {}

  async showLoanDetails(loanId: number) {
    await this.modalService.present(LoanDetailModalComponent, {
      loanId
    });
  }
} 