import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Loan, LoanResponse, CreateLoanDto, UpdateLoanDto } from '../models/loan.model';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private apiUrl = `${environment.apiUrl}/loans`;

  // Mock data para desarrollo
  private mockLoan: Loan = {
    Id: 2,
    User: {
      Id: 1,
      Name: "John Doe",
      Email: "john.doe@example.com",
      CreatedAt: "2025-07-24 03:52:09",
      Loans: []
    },
    Book: {
      Id: 1,
      Title: "El halago",
      Author: "Luis caribe",
      Isbn: "978-0123111589",
      Available: false,
      CreatedAt: "2025-07-24 04:10:13"
    },
    LoanDate: "2025-07-24 04:22:05",
    ReturnDate: "2025-07-24 04:22:13",
    Returned: true
  };

  constructor(private http: HttpClient) { }

  /**
   * Obtiene todos los préstamos
   */
  getLoans(): Observable<Loan[]> {
    // return this.http.get<Loan[]>(this.apiUrl);
    return of([this.mockLoan]);
  }

  /**
   * Obtiene un préstamo por su ID
   * @param id ID del préstamo
   */
  getLoanById(id: number): Observable<Loan> {
    return this.http.get<Loan>(`${this.apiUrl}/${id}`);
  }


  /**
   * Crea un nuevo préstamo
   * @param loanDto Datos del préstamo a crear
   */
  createLoan(loanDto: CreateLoanDto): Observable<Loan> {
    // return this.http.post<Loan>(this.apiUrl, loanDto);
    return of(this.mockLoan);
  }

  /**
   * Devuelve un libro (marca el préstamo como devuelto)
   * @param id ID del préstamo
   */
  returnBook(id: number): Observable<Loan> {
    // return this.http.post<Loan>(`${this.apiUrl}/${id}/return`, {});
    return of({ ...this.mockLoan, Returned: true, ReturnDate: new Date().toISOString() });
  }
} 