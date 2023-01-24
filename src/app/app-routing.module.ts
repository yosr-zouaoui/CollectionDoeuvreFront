import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutOeuvreComponent } from './ajout-oeuvre/ajout-oeuvre.component';
import { HomeComponent } from './home/home.component';
import { ListeoeuvresComponent } from './listeoeuvres/listeoeuvres.component';
import { OeuvredetailComponent } from './oeuvredetail/oeuvredetail.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'addoeuvre', component: AjoutOeuvreComponent },
  { path: 'listeoeuvres', component: ListeoeuvresComponent },
  { path: 'oeuvredetail', component: OeuvredetailComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
