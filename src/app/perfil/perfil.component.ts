import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConversorAlturaPipe } from '../pipes/conversor-altura.pipe';
import { AddressService } from '../services/localizao.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/components/header/header.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, RouterModule, ConversorAlturaPipe, FormsModule, HeaderComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})

export class PerfilComponent implements OnInit {
  userData: any;
  cep: string = '';
  address: string = '';
  showAddress: boolean = false;

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser') || '{}');
    this.userData = loggedUser;
  }

  searchAddress(): void {
    this.addressService.get(this.cep).subscribe(data => {
      this.address = `${data.logradouro} - ${data.bairro} - ${data.localidade}/${data.uf}`;
    });
    this.showAddress = true;
  }
}