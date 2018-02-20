import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue'
import { CollegueService } from '../shared/service/collegue.service'
import { ScorePipe } from '../shared/pipe/score.pipe'
import { ActionComponent } from '../action/action.component'
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-classique',
  templateUrl: './classique.component.html',
  styleUrls: ['./classique.component.css']
})

export class ClassiqueComponent implements OnInit {

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
