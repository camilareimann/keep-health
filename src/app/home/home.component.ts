import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component'; 
import { HeaderComponent } from '../shared/components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {

  userData: any;

  ngOnInit(): void {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser') || '{}');
    this.userData = loggedUser;
  }
}
