import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../shared/navbar/navbar.component";

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './public.component.html',
  styleUrl: './public.component.css'
})
export default class PublicComponent {

}
