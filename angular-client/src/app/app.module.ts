import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PlayerService} from './player.service'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BattlePageComponent } from './battle-page/battle-page.component';
import { RankingPageComponent } from './ranking-page/ranking-page.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BattlePageComponent,
    RankingPageComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
