import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { ServerCommunicationService } from '../../services/server-communication.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})

export class DoneComponent implements OnInit {
  public thingsDone: Observable<string[]>;
  

  constructor(
    private store: StoreService,
    private httpService: ServerCommunicationService
  ) {}

  ngOnInit() {
    this.thingsDone = this.store.getThingsDone();
  }
}
