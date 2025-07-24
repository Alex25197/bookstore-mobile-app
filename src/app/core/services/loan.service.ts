import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Loan } from '../models/loan.model';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private apiUrl = `${environment.apiUrl}/loans`;

  constructor(private http: HttpClient) {}

  loanBook(userId: number, bookId: number): Observable<any> {
    const params = { userId: userId.toString(), bookId: bookId.toString() };
    return this.http.post(`${this.apiUrl}`, {}, { params });
  }

  getLoanById(loanId: number): Observable<Loan> {
    return this.http.get<Loan>(`${this.apiUrl}/${loanId}`);
  }
} 