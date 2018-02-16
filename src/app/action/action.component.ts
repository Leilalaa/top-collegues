import { Component, OnInit, Input } from '@angular/core'
import { Collegue } from '../shared/domain/collegue'
import { CollegueService } from '../shared/service/collegue.service'

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

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
