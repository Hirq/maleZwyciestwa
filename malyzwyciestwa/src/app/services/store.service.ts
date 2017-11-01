import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StoreService {
  private thingsToDo: BehaviorSubject<string[]>;
  private thingsDone: BehaviorSubject<string[]>;

  constructor() { 
    this.thingsToDo = new BehaviorSubject<string[]>([]);
    this.thingsDone = new BehaviorSubject<string[]>([]);
  }

  public setThingsToDo(newThings: string[]): void {
    this.thingsToDo.next(newThings);
  }

  public setThingsDone(newThings: string[]): void {
    this.thingsDone.next(newThings);
  }

  public getThingsToDo(): Observable<string[]> {
    return this.thingsToDo.asObservable();
  }

  public getThingsDone(): Observable<string[]> {
    return this.thingsDone.asObservable();
  }

  public addThingToDo(stuff: string): void {
    const things = this.thingsToDo.getValue();

    things.push(stuff);

    this.setThingsToDo(things);
  }

  public deleteThingToDo(stuff: string): void {
    const things = this.thingsToDo.getValue(),
          index = things.indexOf(stuff);

    things.splice(index, 1);

    this.setThingsToDo(things);
  }
  
  public addThingDone(stuff: string): void {
    const things = this.thingsDone.getValue();
    
    things.push(stuff);
    
    this.setThingsDone(things);
  }
}
