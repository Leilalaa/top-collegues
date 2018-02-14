import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue'

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {
  // paramètre d'entrée "collegue"
  @Input() collegue:Collegue;
  constructor() { }
  // ...
  ngOnInit() {
  }
  jaime() {
  this.collegue.score+=10
  }
  jedeteste() {
  this.collegue.score-=5
  }
}
