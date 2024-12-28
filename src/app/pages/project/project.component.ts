import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export default class ProjectComponent implements OnInit{
  @Input('id') idProject!:string;
  
  ngOnInit(): void {
      console.log(this.idProject);
  }
}
