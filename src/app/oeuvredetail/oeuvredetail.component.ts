import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-oeuvredetail',
  templateUrl: './oeuvredetail.component.html',
  styleUrls: ['./oeuvredetail.component.css']
})
export class OeuvredetailComponent implements OnInit {
  currentoeuvreid : any;
  currentoeuvre : any;
  images : any;

  constructor( private route: ActivatedRoute,private service: ApiserviceService) { }

  ngOnInit(): void {
 this.currentoeuvreid= this.route.snapshot.paramMap.get('id');
 this.Oeuvresdetail(this.currentoeuvreid);
 this.getImages(this.currentoeuvreid);
}



  Oeuvresdetail(id){
    this.service.getOeuvresdetail(id)
    .subscribe(
      data => {
        this.currentoeuvre = data;
      }); 
  }


  getImages(id){
    this.service.getimages(id)
    .subscribe(
      data => {
        this.images = data;
      }); 
  }
}
