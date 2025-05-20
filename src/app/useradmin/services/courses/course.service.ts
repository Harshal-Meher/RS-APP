import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private urls = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.urls);
  }
  
   getCoursesByType(courseTypeId: string): Observable<any> 
    {
      const params = new HttpParams().set('courseTypeId', courseTypeId);
      return this.http.get('http://localhost:3000/courses', { params });
    }
  
    // Get Professional Courses
    getProfessionalCourses(): Observable<any> {
      return this.getCoursesByType('Professional Course');
    }
  
    // Get Crash Courses
    getCrashCourses(): Observable<any> {
      return this.getCoursesByType('Crash Course');
    }

  addCourseDetail(course: any): Observable<any> {
    return this.http.post<any>(this.urls, course);
  }

  updateCourseDetail(id: number, course: any): Observable<any> {
    return this.http.put<any>(`${this.urls}/${id}`, course);
  }

  deleteCourseData(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urls}/${id}`);
  }
}
