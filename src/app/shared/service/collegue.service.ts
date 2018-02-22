import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { Commentaire } from '../domain/commentaire';
import { Avis } from '../domain/avis';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

@Injectable()
export class CollegueService {
  private avisSaveSub: Subject<Avis> = new Subject();
  private collegueSaveSub: Subject<Collegue> = new Subject();

	private commentSaveSub:Subject<Commentaire>=new Subject();

  get CollegueSaveObs(): Observable<Collegue>{
    return this.collegueSaveSub.asObservable();
  }
  get AvisSaveObs(): Observable<Avis>{
    return this.avisSaveSub.asObservable();
  }

  get CommentSaveObs(): Observable<Commentaire>{
    return this.commentSaveSub.asObservable();
  }

  constructor(private http:HttpClient) {
  }

  listerCollegues():Observable<Collegue[]> {
    return this.http.get<Collegue[]>('http://localhost:8080/collegues')
  }

  sauvegarder(collegue:Collegue):Observable<Collegue> {
     const httpOptions = {
       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
     };

     return this.http.post<Collegue>('http://localhost:8080/collegues', collegue, httpOptions)
      .do(col => this.collegueSaveSub.next(col))
  }

  sauvegarder2(newCollegue: Collegue): Observable<Collegue> {
    const obsApresHttp = Observable.of(newCollegue);

    obsApresHttp.subscribe(value => {
      this.collegueSaveSub.next(value);
    });

    return this.collegueSaveObs;
  }

  aimerUnCollegue(unCollegue:Collegue):Observable<Collegue> {
    let body = { "action" : "aimer" }
    this.avisSaveSub.next(new Avis(true, unCollegue.nom));
    return this.http.patch<Collegue>('http://localhost:8080/collegues/'+unCollegue.nom,body)

  }

  detesterUnCollegue(unCollegue:Collegue):Observable<Collegue> {
    let body ={ "action" : "detester" }
    this.avisSaveSub.next(new Avis(false, unCollegue.nom));
    return this.http.patch<Collegue>('http://localhost:8080/collegues/'+unCollegue.nom,body)
  }

  detailCollegue(nom:string):Observable<Collegue> {
    return this.http.get<Collegue>('http://localhost:8080/collegues/'+nom)
  }

  commenter(commentaire:Commentaire):Observable<Commentaire>{
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};
    console.log("new", commentaire)
		return this.http.post<Commentaire>('http://localhost:8080/commenter',commentaire,httpOptions)
		.map(value => {
			this.commentSaveSub.next(value)
			return value;
		})
	}

  recupHistorique():Observable<Vote[]> {
    return this.http.get<Vote[]>('http://localhost:8080/votes')
  }
}
