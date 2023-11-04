import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() public imageSrc: string = "";
  @Input() public width: number = 400;
  @Input() public height: number = 400;

  constructor() { }

  ngOnInit(): void {
  }

}
