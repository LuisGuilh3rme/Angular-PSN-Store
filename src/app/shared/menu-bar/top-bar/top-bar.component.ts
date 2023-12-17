import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { menuType } from 'src/interfaces/menu-data-interface';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @ViewChild('dropdownGameMenu') private dropdownGameMenu?: ElementRef;
  @ViewChild('dropdownSupportMenu') private dropdownSupportMenu?: ElementRef;

  public showDropdown: boolean[] = [ false, false ];
  public menuType = menuType;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event.target']) public onClick(element: HTMLElement): void {
    if (!this.dropdownGameMenu?.nativeElement.contains(element))
      this.showDropdown[0] = false;
    else
      this.showDropdown[0] = true;

    if (!this.dropdownSupportMenu?.nativeElement.contains(element))
      this.showDropdown[1] = false;
    else
      this.showDropdown[1] = true;
  }
}
