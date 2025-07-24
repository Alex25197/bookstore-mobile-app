import { User } from './user.model';
import { Book } from './book.model';

export interface Loan {
    Id: number;
    User: User;
    Book: Book;
    LoanDate: string;
    ReturnDate: string | null;
    Returned: boolean;
}

export interface LoanResponse extends Loan {}


export interface CreateLoanDto {
    UserId: number;
    BookId: number;
}

export interface UpdateLoanDto {
    Returned: boolean;
} 