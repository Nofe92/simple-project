import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_ENDPOINT = 'http://localhost:3000/users';

  constructor(readonly http: HttpClient) { }

  returnUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.USER_ENDPOINT);
  }

  returnUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.USER_ENDPOINT}/${id}`);
  }

}
