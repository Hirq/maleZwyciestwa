import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NowyComponent } from './components/nowy/nowy.component';
import { StoreService } from './services/store.service';
import { LetterUpperPipe } from './pipes/letter-upper.pipe';
import { MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpModuleService } from './services/http-module.service';

@NgModule({
  declarations: [
    AppComponent,
    NowyComponent,
    LetterUpperPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [StoreService, HttpModuleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
