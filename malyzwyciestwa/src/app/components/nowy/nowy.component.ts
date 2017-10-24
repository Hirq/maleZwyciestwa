import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-nowy',
  templateUrl: './nowy.component.html',
  styleUrls: ['./nowy.component.css']
})
export class NowyComponent implements OnInit {
  public things: string[];
  public dateNow: Date;

  constructor(
    private store: StoreService
  ) {
    store.getThings().subscribe(data => this.things = data);
    this.dateNow = new Date();
  }

  ngOnInit() {
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
