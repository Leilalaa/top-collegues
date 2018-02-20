import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue'
import { Avis } from '../shared/domain/avis'
import { CollegueService } from '../shared/service/collegue.service'
import { ScorePipe } from '../shared/pipe/score.pipe'
import { ActionComponent } from '../action/action.component'
import {Observable} from 'rxjs';
import { Subject } from "rxjs/Subject";


@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.css']
})
export class VotreDernierAvisComponent implements OnInit {


  constructor(private cService:CollegueService) { }

  lastlike:boolean = true
  lasthate:boolean = true
  nothing:boolean = false

  avis:Avis;

  ngOnInit() {



    this.cService.AvisSaveObs.subscribe(a => {
      this.avis = a
      console.log(this.avis)

      if (this.avis.avis == true){
        this.lastlike=false
        this.lasthate=true
        this.nothing=true
        //this.collegue.nom=this.avis.personne;
      }else if(this.avis.avis == false){
        this.lasthate=false
        this.nothing=true
        this.lastlike=true
        //this.collegue.nom=this.avis.personne;
      }else{
      this.lasthate=true
      this.nothing=false
      this.lastlike=true
    }
    })

  }

}
