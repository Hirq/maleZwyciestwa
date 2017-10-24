import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StoreService {
  private things: BehaviorSubject<string[]>;

  constructor() { 
    this.things = new BehaviorSubject<string[]>([]);
  }

  public setThings(newThings: string[]): void {
    this.things.next(newThings);
  }

  public getThings(): Observable<string[]> {
    return this.things.asObservable();
  }

  public addThing(stuff: string): void {
    const things = this.things.getValue();

    things.push(stuff);

    this.setThings(things);
  }

  public deleteThing(stuff: string): void {
    const things = this.things.getValue(),
          index = things.indexOf(stuff);

    things.splice(index, 1);

    this.setThings(things);
  }
}
