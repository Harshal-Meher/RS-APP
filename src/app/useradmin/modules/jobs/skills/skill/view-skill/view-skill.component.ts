import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditSkillComponent } from '../edit-skill/edit-skill.component';
import { SkillsService } from '../../../../../../services/jobs/skills.service';

@Component({
  selector: 'app-view-skill',
  templateUrl: './view-skill.component.html',
  styleUrl: './view-skill.component.scss'
})
export class ViewSkillComponent {
  skillDetails:any[]=[];

  isLoading: boolean = false;
  deleteMsg: boolean = false;
  
  confirmDeleteMsg: boolean = false; 
  skillDeleteId: number | null = null; 
  searchBy: any;

  constructor(private skill:SkillsService, private dialog:MatDialog){
    this.getSkillsData();
  }

  getSkillsData() {
    this.skill.getSkills().subscribe(
      (res)=>{
        this.skillDetails = res ;
      }
    )
  }

  onDelete(id: number): void {
    this.skillDeleteId = id;
    this.confirmDeleteMsg = true; 
  }

  confirmDelete(): void {
    if (this.skillDeleteId !== null) {
      this.skill.deleteSkills(this.skillDeleteId).subscribe(
        (res) => 
          {
          this.isLoading = true;
          this.confirmDeleteMsg = false;
          this.deleteMsg = true;

          setTimeout(() => {
            this.getSkillsData(); 
            this.deleteMsg = false;
          }, 2000);
        }
      );
    }
  }

  cancelDelete(): void {
    this.confirmDeleteMsg = false; 
  }

  openDialogModel(skill:any){
    const dialogRef = this.dialog.open(EditSkillComponent,{
      data : skill,
      width:'600'
    });
    dialogRef.afterClosed().subscribe(
      () => this.getSkillsData()
    );
  }

}
