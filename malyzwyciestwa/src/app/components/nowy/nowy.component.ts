import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { ServerCommunicationService } from '../../services/server-communication.service'

@Component({
  selector: 'app-nowy',
  templateUrl: './nowy.component.html',
  styleUrls: ['./nowy.component.css']
})

export class NowyComponent implements OnInit {
  public things: string[];
  public dateNow: Date;
  public dataUrl = 'https://api.github.com/users/seeschweiler'
  public dataPost: string[];

  constructor(
    private store: StoreService,
    private httpService: ServerCommunicationService
  ) {
    store.getThings().subscribe(data => this.things = data);
    this.dateNow = new Date();
    this.dataPost = ['foo', 'bar', 'asu'];
  }

  ngOnInit() { 
    this.httpService.markTodoAsDone(this.dataUrl).subscribe(res => {
      console.log(res);
      console.log(res.login);
      console.log(res.company);
      console.log(res.bio);
    });
    
    this.httpService.addTodoWhatDo(this.dataUrl, this.dataPost).subscribe(res => {
      console.log(res);
    })
  }
  
  public add(stuff: string): void {
    if (!stuff) {
      return;
    }

    this.store.addThing(stuff);
  }

  public delete(stuff: string): void {
    this.store.deleteThing(stuff);
  }

}
