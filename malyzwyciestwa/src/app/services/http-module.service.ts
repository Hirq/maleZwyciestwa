import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UserResponse {
  login: string;
  bio: string;
  company: string;
}

@Injectable()
export class HttpModuleService {
  
  constructor(
    private http: HttpClient
  ) { }

  public getHttp(url: string){
    return this.http.get<UserResponse>(url);
  }

  public postHttp(url: string, data: string[]){
    return this.http.post(url, data);
  }
}
