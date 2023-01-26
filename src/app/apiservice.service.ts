import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  apiUrl = 'https://localhost:44347/api';

  constructor(private http: HttpClient) { }



  addOeuvresList(oeuvre :any): Observable<any[]> {
    return this.http.post<any[]>(this.apiUrl + '/Oeuvres',oeuvre);
  }  


getOeuvresList(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl + '/Oeuvres');
}
getOeuvresdetail(id :any): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl + `/Oeuvres/${id}`);
}
getArtistsList(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl + '/Artistes');
}

getimages(id :any): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl + `/GetImagesByOeuvre/${id}`);
}

UploadPhoto(photo: any): Observable<any[]> {
  const formData = new FormData(); 
        
  
  formData.append("image", photo, photo.name);
  return this.http.post<any[]>(this.apiUrl + '/UploadPictures',photo);
}

}