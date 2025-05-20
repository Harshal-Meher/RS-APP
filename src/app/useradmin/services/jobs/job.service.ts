import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private url = 'http://localhost:3000/jobs';

  constructor(private http: HttpClient) {}

  addJob(jobData: any) {
  return this.http.post(this.url, jobData);
  }

  getJob():Observable<any>{
    return this.http.get(this.url);
  }

  jobDelete(id:number):Observable<any> {
   return this.http.delete(`${this.url}/${id}`)
  }

  updateJobDetail(id: number, job: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, job);
  }

}
