import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input() quoteInput: string;
  @Output() quoteOutput = new EventEmitter<string>();
  @Output() notify:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log("My favorite quote: "+ this.quoteInput);
    this.quoteOutput.emit('Co należy zrobić po upadku? To co robią dzieci: podnieść się.');
  }

  onClick() {
  this.notify.emit("Jesteśmy tym, co w swoim życiu powtarzamy. Doskonałość nie jest jednorazowym aktem, lecz nawykiem.");
  }

}
