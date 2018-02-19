import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
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
    CherchePseudoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
