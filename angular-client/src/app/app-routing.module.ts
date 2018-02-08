import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BattlePageComponent} from './battle-page/battle-page.component';
import {RankingPageComponent} from './ranking-page/ranking-page.component';
import {ResultsComponent} from './results/results.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    children:[]
  },
  {
    path: 'battle',
    pathMatch: 'full',
    component: BattlePageComponent,
    children:[]
  },
  {
    path: 'results',
    pathMatch: 'full',
    component: ResultsComponent,
    children:[]
  },
  {
    path: 'rankings',
    pathMatch: 'full',
    component: RankingPageComponent,
    children:[]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
