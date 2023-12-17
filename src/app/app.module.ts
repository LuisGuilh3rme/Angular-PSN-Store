import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MenuBarComponent } from './components/shared/menu-bar/menu-bar.component';
import { TopBarComponent } from './components/shared/menu-bar/top-bar/top-bar.component';
import { SideBarComponent } from './components/shared/menu-bar/side-bar/side-bar.component';
import { MainProductComponent } from './components/pages/home/main-product/main-product.component';
import { GameCardComponent } from './components/shared/game-card/game-card.component';
import { BrowseComponent } from './components//pages/browse/browse.component';
import { GameCardModalComponent } from './components/shared/game-card/game-card-modal/game-card-modal.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { TopBarDropdownComponent } from './components/shared/menu-bar/top-bar/top-bar-dropdown/top-bar-dropdown.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    TopBarComponent,
    SideBarComponent,
    MainProductComponent,
    GameCardComponent,
    BrowseComponent,
    GameCardModalComponent,
    NotFoundComponent,
    TopBarDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
