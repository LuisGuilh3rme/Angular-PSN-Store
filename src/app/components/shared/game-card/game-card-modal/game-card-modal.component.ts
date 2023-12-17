import { UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { GameDataInterface } from 'src/interfaces/game-data-interface';

@Component({
  selector: 'app-game-card-modal',
  templateUrl: './game-card-modal.component.html',
  styleUrls: ['./game-card-modal.component.css']
})
export class GameCardModalComponent implements OnInit {
  @Input() public game? : GameDataInterface;
  @Input() public showModal: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public closeModal() {
    this.showModal = false;
  }

}
