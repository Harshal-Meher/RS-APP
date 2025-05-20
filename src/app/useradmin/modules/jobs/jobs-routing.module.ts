import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddjobComponent } from './addjob/addjob.component';
import { EditjobComponent } from './editjob/editjob.component';
import { DeletejobComponent } from './deletejob/deletejob.component';
import { ViewjobComponent } from './viewjob/viewjob.component';
import { AddSkillComponent } from './skills/skill/add-skill/add-skill.component';
import { ViewSkillComponent } from './skills/skill/view-skill/view-skill.component';
import { adminAuthGuard } from '../../../guards/admin-auth.guard';

const routes: Routes = [
  {
        path: 'mainpanel/jobs',
        canActivate: [adminAuthGuard],
        children: [
          {path:'add-job', component: AddjobComponent},
          {path:'edit-job', component: EditjobComponent},
          {path:'delete-job', component: DeletejobComponent},
          {path:'view-job', component: ViewjobComponent},
        ],
  },
  {
    path: 'mainpanel/skills',
    canActivate: [adminAuthGuard],
    children: [
      {path:'add-skill', component: AddSkillComponent},
      {path:'view-skill', component: ViewSkillComponent},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
