import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private ADDR_LOGIN = "https://reqres.in/api/login";
  private ADDR_USERLIST = "https://reqres.in/api/users";
  private ADDR_USERLIST_PAGED = "https://reqres.in/api/users?page={0}";
  private ADDR_USER = "https://reqres.in/api/users/{0}";

  constructor(private http: HttpClient) { }

  getUserList(page?: number) {
    let url = this.ADDR_USERLIST;
    if(page != undefined && page != null) {
      url = this.ADDR_USERLIST_PAGED.replace("{0}", page.toString());
    }
    
    return this.http.get(url);
  }

  getUserData(id: number) {
    let url = this.ADDR_USER.replace("{0}", id.toString());

    return this.http.get(url);
  }

  userLogin(email: string, password: string) {
    let data = {
      email: email,
      password: password
    };

    return this.http.post(this.ADDR_LOGIN, data);
  }
  

}
