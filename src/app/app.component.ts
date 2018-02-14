import { Component } from '@angular/core';
import { Collegue } from './shared/domain/collegue'
import { UnCollegueComponent } from './un-collegue/un-collegue.component'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  collegues:Collegue[]
  alerte:boolean
  ngOnInit() {
  this.alerte=true
  this.collegues = new Array();
  this.collegues.push(new Collegue("Aline","http://static.tumblr.com/604c1f8526cf8f5511c6d7a5e32f9abd/u00yntv/2wEmlbf4d/tumblr_static_baby_otter.jpg",100))
  this.collegues.push(new Collegue("Hugues","http://static.tumblr.com/604c1f8526cf8f5511c6d7a5e32f9abd/u00yntv/2wEmlbf4d/tumblr_static_baby_otter.jpg",100))
  this.collegues.push(new Collegue("Paul","http://static.tumblr.com/604c1f8526cf8f5511c6d7a5e32f9abd/u00yntv/2wEmlbf4d/tumblr_static_baby_otter.jpg",80))
  this.collegues.push(new Collegue("Justine","http://static.tumblr.com/604c1f8526cf8f5511c6d7a5e32f9abd/u00yntv/2wEmlbf4d/tumblr_static_baby_otter.jpg",20))
  this.collegues.push(new Collegue("Robin","http://static.tumblr.com/604c1f8526cf8f5511c6d7a5e32f9abd/u00yntv/2wEmlbf4d/tumblr_static_baby_otter.jpg",10))
  }

  add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement) {

    this.collegues.push(new Collegue(pseudo.value,imageUrl.value,0))

    pseudo.value =''
    imageUrl.value =''

    this.alerte = false
    return false; // pour éviter le rechargement de la page
}
}
