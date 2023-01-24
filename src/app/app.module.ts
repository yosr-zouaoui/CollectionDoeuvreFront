import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AjoutOeuvreComponent } from './ajout-oeuvre/ajout-oeuvre.component';
import { ListeoeuvresComponent } from './listeoeuvres/listeoeuvres.component';
import { OeuvredetailComponent } from './oeuvredetail/oeuvredetail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AjoutOeuvreComponent,
    ListeoeuvresComponent,
    OeuvredetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
