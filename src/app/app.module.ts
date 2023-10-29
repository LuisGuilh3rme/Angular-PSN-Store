import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { TopBarComponent } from './components/menu-bar/top-bar/top-bar.component';
import { SideBarComponent } from './components/menu-bar/side-bar/side-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    TopBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
