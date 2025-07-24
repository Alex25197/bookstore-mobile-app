// Interfaz para los préstamos (por ahora vacío pero preparado para futura implementación)
export interface Loan {
  Id: number;
  LoanDate: string;
  ReturnDate: string | null;
  Returned: boolean;
}

export interface User {
  Id: number;
  Name: string;
  Email: string;
  CreatedAt: string;
  Loans: Loan[];
}

// Tipo para la respuesta del API
export type UsersResponse = User[]; 