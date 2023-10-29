import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './shared/menu-bar/menu-bar.component';
import { TopBarComponent } from './shared/menu-bar/top-bar/top-bar.component';
import { SideBarComponent } from './shared/menu-bar/side-bar/side-bar.component';
import { MainProductComponent } from './components/main-product/main-product.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    TopBarComponent,
    SideBarComponent,
    MainProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
