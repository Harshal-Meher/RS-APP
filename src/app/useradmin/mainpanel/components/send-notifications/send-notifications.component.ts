import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { group } from 'console';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../../../services/notifications/notification.service';
@Component({
  selector: 'app-send-notifications',
  templateUrl: './send-notifications.component.html',
  styleUrls: ['./send-notifications.component.scss'],
})
export class SendNotificationsComponent {

  msgSend :boolean = false;
  msgForm!: FormGroup;
  alertMsg :boolean =false;

  constructor(private notificationService: NotificationService,private router:Router,private toastMsg:ToastrService) {
    this.msgForm =new FormGroup(
   {
    msg : new FormControl('',Validators.required)
   }
    )
  }

  // sendMessage(data:any) {
  //   if(this.msgForm.valid){
  //     this.msgSend = true 
  //     setTimeout(() => {
  //       this.msgSend =false;
  //       this.router.navigateByUrl('/')
  //     }, 3000);
  //     this.notificationService.sendNotification(data)
  //     console.log(data);
  //   }
  //   else {
  //     this.alertMsg =true;
  //   }
      
  // }

  sendMessage(msg:any) {
    this.toastMsg.success("Send Notification Succesfully...");
    this.notificationService.sendNotification(msg.value);
    console.log(msg.value)
    setTimeout(() => {
      this.router.navigateByUrl('/')
    }, 2000);

  }
}
