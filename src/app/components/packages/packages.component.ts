import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PackageService } from '../../services/packages/package.service';
@Component({
  standalone:true,
  selector: 'app-packages',
  templateUrl:'./packages.component.html',
  styleUrl: './packages.component.scss',
  imports:[CommonModule,MatButtonModule,MatButton, MatCardModule,
    MatIconModule,]
})
export class PackagesComponent {

  packageData:any[] = [];

  constructor(private packageService:PackageService){
    this.getPackages();
  }

  getPackages(){
    this.packageService.getPackages().subscribe(
      (res) => {
      this.packageData = res;
    })
  }
}
