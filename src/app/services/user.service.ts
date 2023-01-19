import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserResponse } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers(page: number, per_page: number): Observable<IUserResponse> {
    const url = this.baseUrl + '/users';

    return this.http.get<IUserResponse>(url, { 
      params: {
        page,
        per_page,
      }
    })
  }
}
