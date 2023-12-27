import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { GameData } from 'src/data/game-data';
import { GameDataInterface } from 'src/interfaces/game-data-interface';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit, OnDestroy {
  public games: GameDataInterface[];
  public gameCardDimension: number = 200;

  constructor() {
    this.games = GameData;
  }

  @HostListener('window:resize')
  ngOnInit(): void {
    this.gameCardDimension = window.innerWidth > 500 ? 200 : 100;
  }

  ngOnDestroy(): void {
    this.games = [];
  }
}
