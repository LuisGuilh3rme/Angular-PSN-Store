import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar-dropdown',
  templateUrl: './top-bar-dropdown.component.html',
  styleUrls: ['./top-bar-dropdown.component.css']
})
export class TopBarDropdownComponent implements OnInit {
  @Input() public showDropdown! : boolean;
  constructor() { }

  ngOnInit(): void {
  }
}
