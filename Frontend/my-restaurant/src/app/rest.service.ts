import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor( private http: HttpClient) { }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/register', JSON.stringify(user), httpOptions);
  }
  
  getUser(id: string): Observable<User> {
    return this.http.get<User>('http://localhost:3000/api/getUser/' + id);
  }
}
