import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../userResponseInterface';

@Injectable()
export class ServerCommunicationService {

  constructor(
    private http: HttpClient
  ) { }

  public markTodoAsDone(url: string){
    return this.http.get<UserResponse>(url);
  }

  public addTodoWhatDo(url: string, data: string[]){
    return this.http.post(url, data);
  }
  
}
