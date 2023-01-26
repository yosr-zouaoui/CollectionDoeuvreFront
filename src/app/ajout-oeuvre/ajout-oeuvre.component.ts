import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';


@Component({
  selector: 'app-ajout-oeuvre',
  templateUrl: './ajout-oeuvre.component.html',
  styleUrls: ['./ajout-oeuvre.component.css']
})
export class AjoutOeuvreComponent implements OnInit {

  constructor(private service: ApiserviceService,private route:Router) { }

  submitted = false;
  oeuvre ={
  titre: '',
  nomArtiste: '',
  presnomArtiste: '',
  dateCreation: 0,
  materiaux: '',
  support: '',
  dimensions2D: '',
  dimensions3D: '',
  poid: 0,
  nbElements: 0,
  numeroTitrage: 0,
  typeTitrage: '',
  description: '',
  artisteId: 0
  }
  file: any ;


  ngOnInit(): void {
  }

  saveOeuvre(): void {
    
    const data = {
      titre: this.oeuvre.titre,
      nomArtiste: this.oeuvre.nomArtiste,
      presnomArtiste: this.oeuvre.presnomArtiste,
      dateCreation: this.oeuvre.dateCreation,
      materiaux: this.oeuvre.materiaux,
      support: this.oeuvre.support,
      dimensions2D: this.oeuvre.dimensions2D,
      dimensions3D: this.oeuvre.dimensions3D,
      poid: this.oeuvre.poid,
      nbElements: this.oeuvre.nbElements,
      typeTitrage: this.oeuvre.typeTitrage,
      numeroTitrage: this.oeuvre.numeroTitrage,
     
    };
    console.log(data);

    this.service.addOeuvresList(data).subscribe(
        
        response => {
         
          this.submitted = true;
          this.route.navigate(['/listeoeuvres']);
        },
        error => {
          console.log(error);
         
        });
        
  }
  onChange(event: any) {
    this.file = event.target.files[0];
}

  uploadPhoto() {
    this.service.UploadPhoto(this.file).subscribe((data: any) => { 
   
    })
  }


}
