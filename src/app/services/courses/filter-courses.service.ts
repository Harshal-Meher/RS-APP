import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterCoursesService {

   private url = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  // Get all courses
  getAllCourses(): Observable<any> {
    return this.http.get(this.url);
  }

  getCoursesByType(courseTypeId: string): Observable<any> 
  {
    const params = new HttpParams().set('courseTypeId', courseTypeId);
    return this.http.get(this.url, { params });
  }

  // Get Professional Courses
  getProfessionalCourses(): Observable<any> {
    return this.getCoursesByType('Professional Course');
  }

  // Get Crash Courses
  getCrashCourses(): Observable<any> {
    return this.getCoursesByType('Crash Course');
  }

  getCourseById(id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
}

}
