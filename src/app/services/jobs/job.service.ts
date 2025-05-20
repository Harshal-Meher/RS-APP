import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Job {
  skills: any;
  jobTitle: string;
  companyName: string;
  jobLocation: string;
  employmentType: string;
  jobDescription: string;
  salary?: string;
  postedTime?: string;
  workType?: string;
  jobType?: string;
  requirements?: string[];
  companyLogo?: string;
}

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private url = 'http://localhost:3000/jobs';
  private apiUrl = 'http://localhost:3000/skills'; 


  constructor(private http: HttpClient) {}

  addJob(jobData: any) {
  return this.http.post(this.url, jobData);
  }

  getJob():Observable<any>{
    return this.http.get(this.url);
  }
  getSkills():Observable<any>{
    return this.http.get(this.apiUrl);
  }

  jobDelete(id:number):Observable<any> {
   return this.http.delete(`${this.url}/${id}`)
  }

  updateJobDetail(id: number, job: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, job);
  }

}
