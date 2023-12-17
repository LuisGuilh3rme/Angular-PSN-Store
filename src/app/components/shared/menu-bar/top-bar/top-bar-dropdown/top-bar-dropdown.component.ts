import { Component, Input, OnInit} from '@angular/core';
import { MenuData } from 'src/data/menu-data';
import { menuType } from 'src/enums/menu-type-enum';
import { MenuDataInterface } from 'src/interfaces/menu-data-interface';

@Component({
  selector: 'app-top-bar-dropdown',
  templateUrl: './top-bar-dropdown.component.html',
  styleUrls: ['./top-bar-dropdown.component.css']
})
export class TopBarDropdownComponent implements OnInit {
  @Input() public menuItemType?: menuType;
  public menuItems?: MenuDataInterface[];
  constructor() { }

  ngOnInit(): void {
    this.menuItems = MenuData.filter(item => item.menuType == this.menuItemType);
  }
}
