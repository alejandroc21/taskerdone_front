import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '@app/core/model/project';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css'
})
export class ProjectItemComponent {
  @Input() project!: Project;
  private readonly router = inject(Router);
}
