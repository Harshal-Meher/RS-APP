import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  // Declare and initialize a BehaviorSubject with a default value
  private notificationSubject = new BehaviorSubject<string>('Welcome To Open Source Professional❤️️');

  // Observable for components to subscribe to
  public messageObservable: Observable<string> = this.notificationSubject.asObservable();

  constructor() {}

  // Method to send a new notification
  sendNotification(message: string): void {
    this.notificationSubject.next(message);
  }
}
