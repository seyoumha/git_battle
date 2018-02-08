import { Component, OnInit } from '@angular/core';
// import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { PlayerService } from '../player.service';
import {Player} from '../player'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'GitHub Battle'
  newPlayer: Player = new Player();
  players = [];
  msg = ''

  constructor(private _playerService: PlayerService ,private _router: Router) { }

  ngOnInit() {
      this._playerService.playerObserver.subscribe(player =>{
        if (player!=null){
          if(player.error){
            this.msg = 'GitHub username does not exist. Try again'
          }else{
            this.players.push(player)
          }

        }
      })

  }
  retrivePlayer(player){
    this.msg = ''
    this._playerService.retrivePlayer(player);
  }
  battle(){
    this._playerService.battle(this.players)
    this._router.navigate(['results'])
    console.log("hello")
  }
}
