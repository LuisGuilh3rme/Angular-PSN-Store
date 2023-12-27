import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MenuData } from 'src/data/menu-data';
import { menuType } from 'src/enums/menu-type-enum';
import { MenuDataInterface } from 'src/interfaces/menu-data-interface';

@Component({
  selector: 'app-top-bar-dropdown',
  templateUrl: './top-bar-dropdown.component.html',
  styleUrls: ['./top-bar-dropdown.component.scss']
})
export class TopBarDropdownComponent implements OnInit {
  @Input() public menuItemType?: menuType;
  public menuItems?: MenuDataInterface[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menuItems = MenuData.filter(item => item.menuType == this.menuItemType);
  }

  linkRedirect(url: string) {
    if (url.includes('https'))
      window.location.href = url;
    else
      this.router.navigate(['/', url]);
  }
}
