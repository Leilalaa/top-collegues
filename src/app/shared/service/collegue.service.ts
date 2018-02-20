import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { Avis } from '../domain/avis';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Subject } from "rxjs/Subject";

@Injectable()
export class CollegueService {
  private avisSaveSub: Subject<Avis> = new Subject();
  private collegueSaveSub: Subject<Collegue> = new Subject();

  get CollegueSaveObs(): Observable<Collegue>{
    return this.collegueSaveSub.asObservable();
  }
  get AvisSaveObs(): Observable<Avis>{
    return this.avisSaveSub.asObservable();
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
     this.collegueSaveSub.next(collegue);
     return this.http.post<Collegue>('http://localhost:8080/collegues', collegue, httpOptions)
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
}
