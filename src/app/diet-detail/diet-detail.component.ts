import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from '../shared/components/header/header.component';


@Component({
  selector: 'app-diet-detail',
  standalone: true,
  imports: [ButtonModule, HeaderComponent],
  templateUrl: './diet-detail.component.html',
  styleUrl: './diet-detail.component.scss'
})
export class DietDetailComponent implements OnInit {
  dietId: number = 0;
  diets: any = [];
  diet: any = {};
  Router: any;

  constructor(private activatedRoute: ActivatedRoute, private Routers: Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.activatedRoute.params.subscribe((param) => {
      this.dietId = param['id'];
    });

    this.diets = this.getDiets();
    this.diet = this.diets.find((diet: { id: number; }) => diet.id == this.dietId)
  }

  getDiets() {
    const diets = localStorage.getItem("diets");
    if (!!diets) {
      return JSON.parse(diets);
    } else {
      return [];
    };
  }

  redirectToDiet() {
    this.Routers.navigate(['/diet']);
  }

}
