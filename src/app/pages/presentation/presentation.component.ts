import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export default class PresentationComponent {

}
