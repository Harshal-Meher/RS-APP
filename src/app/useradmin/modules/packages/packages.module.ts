import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { ViewPackageComponent } from './view-package/view-package.component';
import { AddPackageComponent } from './add-package/add-package.component';
import { EditPackageComponent } from './edit-package/edit-package.component';


@NgModule({
  declarations: [
    ViewPackageComponent,
    AddPackageComponent,
    EditPackageComponent
  ],
  imports: [
    CommonModule,
    PackagesRoutingModule
  ]
})
export class PackagesModule { }
