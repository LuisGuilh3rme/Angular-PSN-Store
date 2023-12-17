import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameData } from 'src/data/game-data';
import { GameDataInterface } from 'src/interfaces/game-data-interface';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit, OnDestroy {
  public games: GameDataInterface[];

  constructor() {
    this.games = GameData;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.games = [];
  }
}
