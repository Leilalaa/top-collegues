import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class CollegueService {

constructor(private http:HttpClient) {
}

listerCollegues():Promise<Collegue[]> {
  return this.http.get<Collegue[]>('http://localhost:8080/collegues').toPromise()
}
sauvegarder(collegue:Collegue):Promise<Collegue> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  return this.http.post<Collegue>('http://localhost:8080/collegues', collegue, httpOptions).toPromise()
}
aimerUnCollegue(unCollegue:Collegue):Promise<Collegue> {
  let body = { "action" : "aimer" }
  return this.http.patch<Collegue>('http://localhost:8080/collegues/'+unCollegue.nom,body).toPromise()
}
detesterUnCollegue(unCollegue:Collegue):Promise<Collegue> {
  let body ={ "action" : "detester" }
  return this.http.patch<Collegue>('http://localhost:8080/collegues/'+unCollegue.nom,body).toPromise()
}

detailCollegue(nom:string):Promise<Collegue> {
  return this.http.get<Collegue>('http://localhost:8080/collegues/'+nom).toPromise()
}
}
