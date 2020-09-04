import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
    ) {}

  login(email: string, password: string): Observable<any>{
    return this.http.post<any>(
      'http://localhost:3000/api/login',
      JSON.stringify({ email, password }),
      httpOptions
    );
  }

  logout() {
    localStorage.removeItem('CurrentUser');
  }
}
