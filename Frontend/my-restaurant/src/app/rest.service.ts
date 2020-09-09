import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user';
import { Observable } from 'rxjs';
import { Password } from './models/password';
import { Menu } from './models/menu';
import { RestConf } from './models/restConf';
import { Month } from './models/month';
import { Reserv } from './models/reserv';
import { Status } from './models/status';

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

  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/api/deleteUser/' + id);
  }
  
  editUser(id: string, user: User): Observable<User> {
    return this.http.put<User>('http://localhost:3000/api/updateUser/' + id, JSON.stringify(user), httpOptions); 
  }

  editPassword(id: string, password: Password): Observable<any> {
    return this.http.put<Password>('http://localhost:3000/api/updatePassword/' + id, JSON.stringify(password), httpOptions);
  }

  createMenu(menu: Menu): Observable<Menu> {
    return this.http.post<Menu>('http://localhost:3000/api/createMenu', JSON.stringify(menu), httpOptions);
  }

  getMenus():Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/listMenu');
  }

  createConf(restConf: RestConf): Observable<RestConf>{
    return this.http.post<RestConf>('http://localhost:3000/api/createConf', JSON.stringify(restConf), httpOptions);
  }

  deleteMenu(id: string): Observable<any>{
    return this.http.delete<any>('http://localhost:3000/api/deleteMenu/' + id);
  }

  getMenu(id: string): Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/getMenu/' + id);
  }

  updateMenu(id: string, menu: Menu): Observable<Menu>{
    return this.http.put<Menu>('http://localhost:3000/api/updateMenu/' + id, JSON.stringify(menu), httpOptions);
  }

  getAverageCancel(mes: Month): Observable<Month>{
    return this.http.post<any>('http://localhost:3000/api/getAverageCancel', JSON.stringify(mes), httpOptions);
  }

  getAveragePeople(mes: Month): Observable<Month>{
    return this.http.post<any>('http://localhost:3000/api/getAveragePessoas', JSON.stringify(mes), httpOptions);
  }
  
  getAverageReserv(mes: Month): Observable<Month>{
    return this.http.post<Month>('http://localhost:3000/api/getAverageReserv', JSON.stringify(mes), httpOptions);
  }

  createReservation(reserv: Reserv, id: string): Observable<Reserv>{
    return this.http.post<Reserv>('http://localhost:3000/api/createReservation/' + id, JSON.stringify(reserv), httpOptions);
  }

  getHorario(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/getTimeReserv');
  }

  getListReservUser(id: string): Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/listReservationUser/' + id);
  }

  updateStatus(id: string, status: Status): Observable<Status>{
    return this.http.put<Status>('http://localhost:3000/api/updateStatus/' + id, JSON.stringify(status), httpOptions);
  }

  getUsers(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/getUsers');
  }

  getReservations(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/listReservations');
  }
}
