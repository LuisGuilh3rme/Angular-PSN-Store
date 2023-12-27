import { Component, Input, OnInit } from '@angular/core';
import { GameData } from 'src/data/game-data';
import { GameDataInterface } from 'src/interfaces/game-data-interface';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() public gameId: number = 0;
  @Input() public width: number = 400;
  @Input() public height: number = 400;
  public game?: GameDataInterface;
  public showModal: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.game = GameData.find(game => game.id == this.gameId);
  }

  public openModal() {
    this.showModal = !this.showModal;
  }
}
