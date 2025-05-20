import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { ViewPremiumCandidatesComponent } from './view-premium-candidates/view-premium-candidates.component';
import { InitiatedInterviewComponent } from './initiated-interview/initiated-interview.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { AddPremiumCandidatesComponent } from './add-premium-candidates/add-premium-candidates.component';
import { EditcandidateComponent } from './editcandidate/editcandidate.component';
import { ViewcandidateComponent } from './viewcandidate/viewcandidate.component';
import { AddcandidateComponent } from './addcandidate/addcandidate.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ViewPremiumCandidatesComponent,
    InitiatedInterviewComponent,
    EditDialogComponent,
    AddPremiumCandidatesComponent,
    EditcandidateComponent,
    ViewcandidateComponent,
    AddcandidateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CandidatesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
    FormsModule,
    RouterModule.forRoot([]),
  ],
  bootstrap: [InitiatedInterviewComponent] 
})
export class CandidatesModule { }
