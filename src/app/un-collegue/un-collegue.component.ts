import { Component, OnInit} from '@angular/core'
import { ActivatedRoute} from '@angular/router';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service'
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})

export class UnCollegueComponent implements OnInit {

  nom:string;
  collegue:Collegue;

  constructor(private route: ActivatedRoute,
	        private collegueService: CollegueService) {
    route.params.subscribe(params => { this.nom = params['nom']; });
  }

  ngOnInit() {
    this.collegueService.detailCollegue(this.nom).then(c => this.collegue = c);
  }
}
