import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcandidateComponent } from './addcandidate/addcandidate.component';
import { EditcandidateComponent } from './editcandidate/editcandidate.component';
import { ViewcandidateComponent } from './viewcandidate/viewcandidate.component';
import { adminAuthGuard } from '../../../guards/admin-auth.guard';
import { AddPremiumCandidatesComponent } from './add-premium-candidates/add-premium-candidates.component';
import { ViewPremiumCandidatesComponent } from './view-premium-candidates/view-premium-candidates.component';
import { InitiatedInterviewComponent } from './initiated-interview/initiated-interview.component';

const routes: Routes = [
  {
    path: 'mainpanel/candidates',
    canActivate: [adminAuthGuard],
    children: [
      { path: 'add-candidate', component: AddcandidateComponent },
      { path: 'edit-candidate', component: EditcandidateComponent },
      { path: 'view-candidate', component: ViewcandidateComponent },
    ]
  },
  {
    path: 'mainpanel/premium-candidates',
    canActivate: [adminAuthGuard],
    children: [
      { path: 'add-premium-candidate', component: AddPremiumCandidatesComponent },
      { path: 'view-premium-candidate', component: ViewPremiumCandidatesComponent },
      { path: 'intervied/:id', component: InitiatedInterviewComponent }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesRoutingModule { }