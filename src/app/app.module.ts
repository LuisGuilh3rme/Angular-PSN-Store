import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './shared/menu-bar/menu-bar.component';
import { TopBarComponent } from './shared/menu-bar/top-bar/top-bar.component';
import { SideBarComponent } from './shared/menu-bar/side-bar/side-bar.component';
import { MainProductComponent } from './components/main-product/main-product.component';
import { GameCardComponent } from './shared/game-card/game-card.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { GameCardModalComponent } from './shared/game-card/game-card-modal/game-card-modal.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
