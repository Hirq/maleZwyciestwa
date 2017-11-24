import { Component, OnInit } from '@angular/core';
import { FavoriteComponent } from '../favorite/favorite.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showMessage: string = 'Wszystko istnieje wyłącznie dzięki naszej świadomości.';

  constructor() { }

  ngOnInit() {
  }
  
  onNotifyClicked(message: string){
    this.showMessage = message;
  }
  onConsole(ev){
    console.log(ev + 'Aldous Huxley');
  }
}
