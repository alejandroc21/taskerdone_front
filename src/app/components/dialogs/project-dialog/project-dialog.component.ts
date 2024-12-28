import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Project } from '@app/core/model/project';
import { ProjectService } from '@app/core/services/project.service';

@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [MatButtonModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.css'
})
export class ProjectDialogComponent {
  private readonly projectService = inject(ProjectService);
  data = inject<FormBuilder>(MAT_DIALOG_DATA);
  
  formBuilder = inject(FormBuilder);
  
    formProject = this.formBuilder.group({
      name: ['', Validators.required]
    });


  createProject(){
      if(this.formProject.valid){
        console.log(this.formProject.value);
        
        this.projectService.createProject(this.formProject.value as Project).subscribe({
          next:(res)=>{
            console.log(res);
          },
          error:(err)=>{
            console.log(err);
          }
        });
      }
    }

}
