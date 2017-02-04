import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SpeakersComponent } from './speakers/speakers.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeakersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBrWJx91j512T3q6AaTGNxu_3fq47bYhfg",
      authDomain: "devfestmn.firebaseapp.com",
      databaseURL: "https://devfestmn.firebaseio.com",
      storageBucket: "firebase-devfestmn.appspot.com",
    }),
    RouterModule.forRoot([
      {path: '', component: SpeakersComponent},
      {path: 'about', loadChildren: './about/about.module#AboutModule'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
