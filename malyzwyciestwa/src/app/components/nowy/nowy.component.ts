import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { HttpModuleService } from '../../services/http-module.service'

@Component({
  selector: 'app-nowy',
  templateUrl: './nowy.component.html',
  styleUrls: ['./nowy.component.css']
})

export class NowyComponent implements OnInit {
  public things: string[];
  public dateNow: Date;
  public url1 = 'https://api.github.com/users/seeschweiler'
  public dataPost: string[];

  constructor(
    private store: StoreService,
    private httpModule: HttpModuleService
  ) {
    store.getThings().subscribe(data => this.things = data);
    this.dateNow = new Date();
    this.dataPost = ['foo', 'bar', 'asu'];
  }

  ngOnInit() { 
    this.httpModule.getHttp(this.url1).subscribe(res => {
      console.log(res);
      console.log(res.login);
      console.log(res.company);
      console.log(res.bio);
    });
    this.httpModule.postHttp(this.url1, this.dataPost).subscribe(res => {
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
