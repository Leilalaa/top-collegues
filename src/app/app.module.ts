import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { CollegueService } from './shared/service/collegue.service';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './action/action.component';
import { ClassiqueComponent } from './classique/classique.component';
import { TableauComponent } from './tableau/tableau.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { ScorePipe } from './shared/pipe/score.pipe';
import { CherchePseudoPipe } from './shared/pipe/cherche-pseudo.pipe';
import { TriScorePipe } from './shared/pipe/tri-score.pipe';
import { VotreDernierAvisComponent } from './votre-dernier-avis/votre-dernier-avis.component';
import { HistoriqueComponent } from './historique/historique.component';

 const appRoutes: Routes = [
 { path: 'classique', component: ClassiqueComponent },
 { path: 'tableau', component: TableauComponent },
 { path: 'carrousel', component: CarrouselComponent },
 { path: 'detail/:nom', component: UnCollegueComponent },
 { path: '**', redirectTo: 'classique'}
 ];

@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    ActionComponent,
    ClassiqueComponent,
    TableauComponent,
    CarrouselComponent,
    ScorePipe,
    CherchePseudoPipe,
    TriScorePipe,
    VotreDernierAvisComponent,
    HistoriqueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
