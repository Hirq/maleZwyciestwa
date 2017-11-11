import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { ServerCommunicationService } from '../../services/server-communication.service'
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-nowy',
  templateUrl: './nowy.component.html',
  styleUrls: ['./nowy.component.css'],
  animations: [
  trigger('thingAnim', [
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate(350)
    ]),
    transition(':leave', [
      group([
        animate('0.2s ease', style({
          transform: 'translate(150px,25px)'
        })),
        animate('0.5s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ])
  ])

],
})

export class NowyComponent implements OnInit {
  public thingsToDo: string[];
  public dateNow: Date;
  public dataPost: string[];

  constructor(
    private store: StoreService,
    private httpService: ServerCommunicationService,
  ) {
    store.getThingsToDo().subscribe(data => this.thingsToDo = data);
    this.dateNow = new Date();
    this.dataPost = ['foo', 'bar', 'asu'];
  }

  ngOnInit() { 
    this.httpService.markToDoAsDone().subscribe(res => {
      console.log(res);
      console.log(res.login);
      console.log(res.company);
      console.log(res.bio);
    });
    
    this.httpService.addToDoWhatDo(this.dataPost).subscribe(res => {
      console.log(res);
    })

  }
  
  public add(stuff: string): void {
    if (!stuff) {
      return;
    }

    this.store.addThingToDo(stuff);
  }

  public delete(stuff: string): void {
    this.store.deleteThingToDo(stuff);
  }

  public transfer(stuff: string): void {
    this.store.addThingDone(stuff);
    this.store.deleteThingToDo(stuff);
  }
}
