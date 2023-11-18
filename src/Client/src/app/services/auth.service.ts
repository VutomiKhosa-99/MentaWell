import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const baseUrl = environment.baseUrl;



@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor( private http: HttpClient) { }

// for registration

register(fullName: string, email: string, password :string): Observable<any> {

  return this.http.post(
    baseUrl + 'api/users/signup',
    {
      fullName , email, password
    },
    httpOptions
  );
}


// for login

loginUser(email: string, password: string): Observable<any> {
  const userData = { email, password };
  return this.http.post(`${baseUrl}api/users/login`, userData);
}


logout(): Observable<any> {
  return this.http.post(baseUrl + 'signout', {}, httpOptions);
}


}
