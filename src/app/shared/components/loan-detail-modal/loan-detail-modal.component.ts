import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BaseModalComponent } from '../base-modal/base-modal.component';
import { ModalService } from '../../services/modal.service';
import { LoanService } from '../../../core/services/loan.service';
import { Loan } from '../../../core/models/loan.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loan-detail-modal',
  templateUrl: './loan-detail-modal.component.html',
  styleUrls: ['./loan-detail-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, BaseModalComponent, CommonModule]
})
export class LoanDetailModalComponent implements OnInit {
  @Input() loanId!: number;
  loan?: Loan;
  isLoading = true;
  error: string | null = null;
  isReturning = false;

  constructor(
    private modalService: ModalService,
    private loanService: LoanService
  ) {}

  ngOnInit() {
    this.loadLoanDetails();
  }

  private async loadLoanDetails() {
    try {
      this.loan = await this.loanService.getLoanById(this.loanId).toPromise();
    } catch (err) {
      this.error = 'Error al cargar los detalles del préstamo';
      console.error(err);
    } finally {
      this.isLoading = false;
    }
  }

  async onReturnBook() {
    if (!this.loan) return;
    this.isReturning = true;
    try {
      await this.loanService.returnBook(this.loan.Id).toPromise();
      this.onDismiss(true);
    } catch (err) {
      this.error = 'Error al devolver el libro';
      console.error(err);
    } finally {
      this.isReturning = false;
    }
  }

  onDismiss(success: boolean = false) {
    this.modalService.dismiss({ success });
  }
} 