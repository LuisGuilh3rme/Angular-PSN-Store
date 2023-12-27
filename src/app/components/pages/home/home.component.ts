import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameData } from 'src/data/game-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public gamesId?: number[];

  constructor() {
    this.gamesId = GameData.map(game => game.id).slice(0, 6);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.gamesId = [];
  }

}
