import { Component } from '@angular/core';
import { Collegue } from './shared/domain/collegue'
import { CollegueService } from './shared/service/collegue.service'
import { UnCollegueComponent } from './un-collegue/un-collegue.component'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private cService:CollegueService) {
  }

  collegues:Collegue[]
  alerte:boolean
  ngOnInit() {
  this.alerte=true
  this.collegues = new Array()
  this.cService.listerCollegues().then(cols => cols.forEach(c => this.collegues.push(c)))
  }

  add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement) {
    this.cService.sauvegarder(new Collegue(pseudo.value,imageUrl.value,0)).then(c => this.collegues.push(c))
    pseudo.value =''
    imageUrl.value =''
    this.alerte = false
    return false; // pour éviter le rechargement de la page
}
}
