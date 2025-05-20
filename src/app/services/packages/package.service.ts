import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

 private url = 'http://localhost:3000/packages';
 
   constructor(private http :HttpClient) { }
 
   getPackages():Observable<any>{
     return this.http.get(this.url);
   }
 
}
