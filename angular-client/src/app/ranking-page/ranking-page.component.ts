import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import {Player} from '../player'

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.css']
})
export class RankingPageComponent implements OnInit {
  title= "Ranking"
  players = null

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayers();
    this.playerService.playersObserver.subscribe(players => {
      this.players = players
      console.log(this.players)
    })
  }

}
