import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NowyComponent } from './components/nowy/nowy.component';
import { StoreService } from './services/store.service';
import { LetterUpperPipe } from './pipes/letter-upper.pipe';
import { MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ServerCommunicationService } from './services/server-communication.service';
import { DoneComponent } from './components/done/done.component';
import { MatProgressBarModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { counterReducer  } from './reducers/todo.reducer';
import { ReduxComponent } from './components/redux/redux.component';

@NgModule({
  declarations: [
    AppComponent,
    NowyComponent,
    LetterUpperPipe,
    DoneComponent,
    ReduxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatProgressBarModule,
    StoreModule.forRoot({ counter: counterReducer  }),
  ],
  providers: [
    StoreService, 
    ServerCommunicationService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
