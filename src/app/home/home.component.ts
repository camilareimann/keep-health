import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExerciciosComponent } from '../exercicios/exercicios.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, ExerciciosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
