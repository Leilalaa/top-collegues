import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue'
import { CollegueService } from '../shared/service/collegue.service'
import { ActionComponent } from './action/action.component'

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})

export class TableauComponent implements OnInit {
  collegue:Collegue;
  constructor(private cService:CollegueService) {
  }
  collegues:Collegue[]
  ngOnInit() {
    this.collegues = new Array()
      this.cService.listerCollegues().then(cols => this.collegues = cols)
  }

}
