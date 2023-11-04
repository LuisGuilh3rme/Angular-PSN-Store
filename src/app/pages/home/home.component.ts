import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameData } from 'src/data/game-data';
import { GameDataInterface } from 'src/interfaces/game-data-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public games: GameDataInterface[];

  constructor() {
    this.games = GameData.slice(0, 6);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.games = [];
  }

}
