import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userinformation } from '../model/userinformation';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Userinformation> {
    const url = 'https://reqres.in/api/users';
    let queryParams = new HttpParams();
    queryParams = queryParams.append('page', 1);
    queryParams = queryParams.append('per_page', 2);
    return this.http.get<Userinformation>(url, { params: queryParams });
  }
}
