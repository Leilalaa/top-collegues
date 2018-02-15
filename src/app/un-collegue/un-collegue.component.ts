import { Component, OnInit, Input } from '@angular/core'
import { Collegue } from '../shared/domain/collegue'
import { CollegueService } from '../shared/service/collegue.service'

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {
  // paramètre d'entrée "collegue"
  @Input() collegue:Collegue;
  constructor(private cService:CollegueService) {
  }
  ngOnInit() {
  }
  jaime() {
    this.collegue.score+=10
    this.cService.aimerUnCollegue(this.collegue)
  }
  jedeteste() {
    this.collegue.score-=5
    this.cService.detesterUnCollegue(this.collegue)
  }
}
