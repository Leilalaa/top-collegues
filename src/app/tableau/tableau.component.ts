import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue'
import { CollegueService } from '../shared/service/collegue.service'
import { ActionComponent } from '../action/action.component'
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})

export class TableauComponent implements OnInit {
  nomCherche:string=""
  limiteDef:number = 8
  collegue:Collegue;
  constructor(private cService:CollegueService) {
  }
  collegues:Collegue[]
  ngOnInit() {
    this.collegues = new Array()
      this.cService.listerCollegues().then(cols => this.collegues = cols)
      this.cService.getCollegueSaveObs().subscribe(c => this.collegues.push(c))
  }

  setLimite(limite:HTMLInputElement){
    this.limiteDef=Number.parseInt(limite.value);
    return false;
  }

  cherchePseudo(trinom:HTMLInputElement){
    this.nomCherche=trinom.value;
    return false;
  }

}
