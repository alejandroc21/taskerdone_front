import { Component, inject, OnInit } from '@angular/core';
import { ProjectService } from '@app/core/services/project.service';
import { ProjectItemComponent } from '@app/components/project-item/project-item.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProjectDialogComponent } from '@app/components/dialogs/project-dialog/project-dialog.component';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProjectItemComponent,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent implements OnInit {
  private readonly projectService = inject(ProjectService);
  private readonly dialog = inject(MatDialog);
  formBuilder = inject(FormBuilder);
  projects$ = this.projectService.projects;

  formProject = this.formBuilder.group({
    name: ['', Validators.required],
  });

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getProjects().subscribe();
  }

  createProject() {
    const dialogRef = this.dialog.open(ProjectDialogComponent);
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
    });
  }
}
