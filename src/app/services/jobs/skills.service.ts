import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private apiUrl = 'http://localhost:3000/skills'; 

  constructor(private http: HttpClient) {}

  addSkill(skillDetails: any): Observable<any> {
    return this.http.post(this.apiUrl, skillDetails);
  }

  getSkills():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  deleteSkills(id:number):Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
  }

  updateSkills(id:number,skill:any){
    return this.http.put(`${this.apiUrl}/${id}`,skill);
  }
}