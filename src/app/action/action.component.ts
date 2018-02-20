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
  @Input()  outline:boolean;

  constructor(private cService:CollegueService) {
  }

  ngOnInit() {
  }

  jaime() {
    this.cService.aimerUnCollegue(this.collegue).subscribe(c => this.collegue.score = c.score)
    return false;
  }

  jedeteste() {
    this.cService.detesterUnCollegue(this.collegue).subscribe(c => this.collegue.score = c.score)
    return false;
  }

  buttonPrimary():string{
   if(this.outline){
     return "btn btn-outline-primary"
   }else{
     return "btn btn-primary"
   }
  }
  
  buttonDanger():string{
   if(this.outline){
     return "btn btn-outline-danger"
   }else{
     return "btn btn-danger"
   }
  }
}
