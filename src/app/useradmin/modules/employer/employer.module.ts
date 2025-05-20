import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerRoutingModule } from './employer-routing.module';
import { ViewEmployerComponent } from './view-employer/view-employer.component';
import { AddEmployerComponent } from './add-employer/add-employer.component';


@NgModule({
  declarations: [
    ViewEmployerComponent,
    AddEmployerComponent
  ],
  imports: [
    CommonModule,
    EmployerRoutingModule
  ]
})
export class EmployerModule { }
