import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IUser } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURI = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  users() {
    return this.http.get(this.baseURI.concat('users'));
  }

  user(intUserID: number) {
    return this.http.get(this.baseURI.concat('users/').concat(intUserID.toString()));
  }
  saveUser(objUser: IUser) {
    return this.http.post(this.baseURI.concat('users'), objUser);
  }

  bands() {
    return this.http.get(this.baseURI.concat('bands'));
  }

  band(strBandId: string) {
    return this.http.get(this.baseURI.concat('bands/').concat(strBandId));
  }
}
