import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { Collegue } from './shared/domain/collegue'
import { CollegueService } from './shared/service/collegue.service'
import { UnCollegueComponent } from './un-collegue/un-collegue.component'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {Observable} from 'rxjs';
import { Subject } from "rxjs/Subject";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  collegues:Collegue[]
  alerte:boolean
  echec:boolean
  ligne:boolean = true
  hors:boolean =true
  online: Observable<boolean>;
  status:string
  statusClass:string
  disable:boolean

  constructor(private cService:CollegueService, private ar:Router) {
    this.online = Observable.merge(
     Observable.of(navigator.onLine),
     Observable.fromEvent(window, 'online').mapTo(true),
     Observable.fromEvent(window, 'offline').mapTo(false)
   )
  }



  ngOnInit() {
    this.alerte=true
    this.echec=true
    this.collegues = new Array()
    this.cService.listerCollegues().subscribe(cols => this.collegues = cols)
    this.cService.CollegueSaveObs.subscribe(c => this.collegues.push(c))
    this.online.subscribe( e => { (e)
      ?(this.status="online"
      ,this.statusClass="badge badge-pill badge-primary"
      ,this.disable = false)
      :(this.status="offline"
      ,this.statusClass="badge badge-pill badge-danger"
      ,this.disable = true)
    })
  }



  add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement) {

    this.cService.sauvegarder(new Collegue(pseudo.value,imageUrl.value,0)).subscribe(c => (c==null?(this.echec=false, this.alerte=true):(this.echec=true, this.alerte=false, this.collegues.push(c))))
    pseudo.value =''
    imageUrl.value =''
    return false; // pour éviter le rechargement de la page
  }

  afficherForm() {
    // Permet d'afficher un element si la route est égale à un des éléments indiqués dans le tableau si dessous
    return ['/carrousel', '/classique', '/tableau'].some(a => a == this.ar.url)
  }


}
