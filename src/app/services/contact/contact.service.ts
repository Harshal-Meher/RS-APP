import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  private url = 'http://localhost:3000/contactUs';

  constructor(private http :HttpClient) { }

  addContactUs(contactUs : any) {
    return this.http.post(this.url ,contactUs);
  }
}
