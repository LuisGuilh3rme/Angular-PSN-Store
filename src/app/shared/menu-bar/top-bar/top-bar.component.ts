import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  public showDropdown: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public openDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
