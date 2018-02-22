import { Component, OnInit, Input } from '@angular/core'
import { Collegue } from '../shared/domain/collegue'
import { Commentaire } from '../shared/domain/commentaire'
import { CollegueService } from '../shared/service/collegue.service'
import {Observable} from 'rxjs';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Subscription } from 'rxjs/Subscription';
import { FormControl, FormGroup ,FormBuilder,Validators  } from '@angular/forms';


class CommentModel{commentaire:string}

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})

export class ActionComponent implements OnInit {


  @Input() collegue:Collegue;
  @Input()  outline:boolean;
  disable:boolean
  online: Observable<boolean>;
  commentModel:CommentModel = new CommentModel()

  constructor(private cService:CollegueService, private modalService: NgbModal) {
    this.online = Observable.merge(
     Observable.of(navigator.onLine),
     Observable.fromEvent(window, 'online').mapTo(true),
     Observable.fromEvent(window, 'offline').mapTo(false)
   )
  }

  ngOnInit() {
    this.online.subscribe( e => { (e)
      ?this.disable = false
      :this.disable = true
    })
  }

  submit() {
    console.log(this.commentModel.commentaire)
    let newCommentaire:Commentaire = new Commentaire(this.collegue,this.commentModel.commentaire)
    this.cService.commenter(newCommentaire).subscribe();
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
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

  buttonSuccess():string{
   if(this.outline){
     return "btn btn-outline-success"
   }else{
     return "btn btn-success"
   }
  }
}
