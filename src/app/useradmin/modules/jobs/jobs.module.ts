import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { EditjobComponent } from './editjob/editjob.component';
import { AddjobComponent } from './addjob/addjob.component';
import { DeletejobComponent } from './deletejob/deletejob.component';
import { ViewjobComponent } from './viewjob/viewjob.component';
import { ViewSkillComponent } from './skills/skill/view-skill/view-skill.component';
import { AddSkillComponent } from './skills/skill/add-skill/add-skill.component';
import { EditSkillComponent } from './skills/skill/edit-skill/edit-skill.component';
import { AddSubSkillComponent } from './skills/sub-skill/add-sub-skill/add-sub-skill.component';
import { ViewSubSkillComponent } from './skills/sub-skill/view-sub-skill/view-sub-skill.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule } from 'ngx-ui-loader';


@NgModule({
  declarations: [
    EditjobComponent,
    AddjobComponent,
    DeletejobComponent,
    ViewjobComponent,
    ViewSkillComponent,
    AddSkillComponent,
    EditSkillComponent,
    AddSubSkillComponent,
    ViewSubSkillComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule
  ]
})
export class JobsModule { }
