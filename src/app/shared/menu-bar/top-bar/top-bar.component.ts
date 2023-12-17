import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { menuType } from 'src/interfaces/menu-data-interface';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @ViewChild('dropdownGameMenu') private dropdownGameMenu?: ElementRef;

  public showDropdown: boolean = false;
  public menuType = menuType;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event.target']) public onClick(element: HTMLElement): void {
    if (!this.dropdownGameMenu?.nativeElement.contains(element))
      this.showDropdown = false;
    else
      this.showDropdown = true;
  }
}
