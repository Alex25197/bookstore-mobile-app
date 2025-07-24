import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User, UsersResponse } from '../models/user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/users`;

  // Datos mock para desarrollo
  private mockUsers: User[] = [
    {
      Id: 1,
      Name: "John Doe",
      Email: "john.doe@example.com",
      CreatedAt: "2025-07-24 03:52:09",
      Loans: []
    },
    {
      Id: 2,
      Name: "Dr. Clara McClure",
      Email: "Eliezer_Fahey@example.org",
      CreatedAt: "2025-07-24 03:53:00",
      Loans: []
    }
  ];

  constructor(private http: HttpClient) { }

  /**
   * Obtiene la lista de todos los usuarios
   * @returns Observable<User[]> Lista de usuarios
   */
  getUsers(): Observable<User[]> {
    // Cuando el backend esté listo, descomentar esta línea y eliminar el mock
    // return this.http.get<UsersResponse>(this.apiUrl);
    
    // Por ahora, retornamos datos mock
    return this.http.get<User[]>(this.apiUrl);
  }

  /**
   * Obtiene un usuario por su ID
   * @param id ID del usuario
   * @returns Observable<User> Usuario encontrado
   */
  getUserById(id: number): Observable<User | undefined> {
    // Cuando el backend esté listo, descomentar esta línea
    // return this.http.get<User>(`${this.apiUrl}/${id}`);
    
    // Por ahora, usamos el mock
    const user = this.mockUsers.find(u => u.Id === id);
    return of(user);
  }

  /**
   * Crea un nuevo usuario
   * @param user Datos del usuario a crear
   * @returns Observable<User> Usuario creado
   */
  createUser(user: Omit<User, 'Id' | 'CreatedAt' | 'Loans'>): Observable<User> {
    // Cuando el backend esté listo, descomentar esta línea
    // return this.http.post<User>(this.apiUrl, user);
    
    // Por ahora, simulamos la creación
    const newUser: User = {
      ...user,
      Id: this.mockUsers.length + 1,
      CreatedAt: new Date().toISOString(),
      Loans: []
    };
    this.mockUsers.push(newUser);
    return of(newUser);
  }
} 