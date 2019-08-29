import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(readonly http: HttpClient) { }

  returnUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }
}