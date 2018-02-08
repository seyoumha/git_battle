import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Player } from './player';

@Injectable()
export class PlayerService {
  playerObserver: BehaviorSubject<any> = new BehaviorSubject(null);
  battleObserver: BehaviorSubject<any> = new BehaviorSubject([]);
  playersObserver: BehaviorSubject<any> = new BehaviorSubject([])

  constructor(private _http: Http) { this.retrivePlayer}

  retrivePlayer(username: string):any{
    return this._http.get('https://api.github.com/users/'+username)
    .subscribe(
      (data: any) => {
        const p = data.json()
        console.log("git hub user", p)
        const player = {username: p.login, avatar: p.avatar_url, score:((p.followers + p.public_repos)*12)}
        this.playerObserver.next(player)
        this.battleObserver.getValue().push(player)
        this.saveToDB(player)
      },
      (err) => {
        this.playerObserver.next({error: 'player not found'})
      })

  }
  battle(players){
  }

  saveToDB(player:Player){
    this._http.post('http://localhost:5000/players', player).subscribe(
      response => this.playersObserver.getValue().push(response.json()),
      errorResponse => console.log(errorResponse)
    )
  }

  getPlayers(){
    this._http.get('http://localhost:5000/players').subscribe(
      players => this.playersObserver.next(players.json()),
      errorResponse => console.log(errorResponse)
    )
  }


}
