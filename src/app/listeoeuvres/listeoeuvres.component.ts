import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';


@Component({
  selector: 'app-listeoeuvres',
  templateUrl: './listeoeuvres.component.html',
  styleUrls: ['./listeoeuvres.component.css']
})
export class ListeoeuvresComponent implements OnInit {

  constructor(private service: ApiserviceService) { }
  oeuvres: any ;
  image: any;
  id : any;
  ngOnInit(): void {
    this.refreshOeuvresList();
  }

 getImage(id){
  this.service.getimages(id).subscribe(data => {
    this.image = data;
  });

 }
  refreshOeuvresList() {
    this.service.getOeuvresList().subscribe(data => {
      this.oeuvres = data;
      this.getImage(data.id);
      
    });
  }

  
}
