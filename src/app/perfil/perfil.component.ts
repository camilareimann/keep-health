import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ConversorAlturaPipe } from '../pipes/conversor-altura.pipe';
import { AddressService } from '../services/localizao.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, RouterModule, ConversorAlturaPipe, FormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})

export class PerfilComponent implements OnInit {
  userData: any;
  cep!: "";
  address!: string;
  showAddress: boolean = false; 

  constructor(private route: ActivatedRoute, private addressService: AddressService) {}

  ngOnInit(): void {
    this.userData = history.state.userData;
  }

  searchAddress(): void {
    this.addressService.get(this.cep).subscribe(data => {
      this.address = `${data.logradouro} - ${data.bairro} - ${data.localidade}/${data.uf}`;
    });
    this.showAddress = true;
  }

}
