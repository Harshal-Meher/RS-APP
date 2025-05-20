import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  private url = 'http://localhost:3000/packages';

  constructor(private http :HttpClient) { }

  addPackages(p:any){
    return this.http.post(this.url,p);
  }

  getPackages():Observable<any>{
    return this.http.get(this.url);
  }

  updatePackage(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, data);
  }

  deletePackages(id:number) {
    return this.http.delete(`${this.url}/${id}`)
  }

}
