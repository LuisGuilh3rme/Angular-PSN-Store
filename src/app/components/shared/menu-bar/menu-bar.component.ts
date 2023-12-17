import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  @ViewChild('fixedMenu') private fixedMenu?: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  fixMenu() {
    if (window.scrollY > this.fixedMenu?.nativeElement.offsetTop)
      this.fixedMenu?.nativeElement.classList.add('menu-bar-fixed');
    else
      this.fixedMenu?.nativeElement.classList.remove('menu-bar-fixed');
  }
}
