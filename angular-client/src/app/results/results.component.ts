import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import {Player} from '../player'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  title= 'Battle'
  players= null
  firstPlace = {}
  secondPlace = {}
  message = ''


  constructor(private _playerService: PlayerService, _router: Router) { }

  ngOnInit() {
    this._playerService.battleObserver.subscribe(players =>{
        this.players= (players)
        console.log(this.players)
        if(this.players[0].score > this.players[1].score){
          this.firstPlace = this.players[0]
          this.secondPlace = this.players[1]
        }
        else if(this.players[0].score < this.players[1].score){
          this.secondPlace = this.players[0]
          this.firstPlace = this.players[1]
        }
        else{
          this.message = 'They are equal'
        }
        console.log('first', this.firstPlace)

      })
  }

  // battle(players){
  //   if(this.players[0].score > this.players[1].score){
  //     this.firstPlace = this.players[0]
  //     this.secondPlace = this.players[1]
  //   }
  //   else if(this.players[0].score < this.players[1].score){
  //     this.secondPlace = this.players[0]
  //     this.firstPlace = this.players[1]
  //   }
  //   else{
  //     this.message = 'They are equal'
  //   }

  // }



}
