import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../models/userResponseInterface';

@Injectable()
export class ServerCommunicationService {
  public dataUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.dataUrl = 'https://api.github.com/users/seeschweiler'
   }

  
  public markToDoAsDone(){
    return this.http.get<UserResponse>(this.dataUrl);
  }

  public addToDoWhatDo(data: string[]){
    return this.http.post(this.dataUrl, data);
  }
  
}
