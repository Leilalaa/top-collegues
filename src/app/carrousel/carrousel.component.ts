import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue'
import { CollegueService } from '../shared/service/collegue.service'
import { ActionComponent } from '../action/action.component'
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  collegue:Collegue;
  constructor(private cService:CollegueService) {
  }
  collegues:Collegue[]
  ngOnInit() {
    this.collegues = new Array()
    this.cService.listerCollegues().subscribe(cols => this.collegues = cols)
    this.cService.CollegueSaveObs.subscribe(c => this.collegues.push(c))
  }

}
