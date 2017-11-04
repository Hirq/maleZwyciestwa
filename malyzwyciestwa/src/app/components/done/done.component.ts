import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { ServerCommunicationService } from '../../services/server-communication.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})

export class DoneComponent implements OnInit {
  public thingsDone: string[];
  public thingsToDo: string[];
  public progress;

  constructor(
    private store: StoreService,
    private httpService: ServerCommunicationService
  ) {
    this.store.getThingsDone().subscribe(data => this.thingsDone = data);
    this.store.getThingsToDo().subscribe(data => this.thingsToDo = data);   
  }

  ngOnInit() {
  }  

}
