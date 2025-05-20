import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

 private url = "http://localhost:3000/EmployerDetails";
 
   constructor(private http: HttpClient) {}
 
   getEmployerData(): Observable<any> {
     return this.http.get(this.url);
   }
 
   addEmployerData(employer: any): Observable<any> {
     return this.http.post(this.url, employer);
   }
}
