import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  speakers;

  constructor(af: AngularFire) {
    this.speakers = af.database.list('/devfest2017/speakers');
  }

  ngOnInit() {
  }

}
