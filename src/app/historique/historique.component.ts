import { Component, OnInit } from '@angular/core';
import { Vote } from '../shared/domain/vote'
import { CollegueService } from '../shared/service/collegue.service'

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  votes:Vote[]
  constructor(private cService:CollegueService) { }

  ngOnInit() {
  }

}
