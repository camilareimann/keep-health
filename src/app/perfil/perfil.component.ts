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
  styleUrl: './perfil.component.scss'
})

export class PerfilComponent implements OnInit {
  userData: any;
  cep!: "";
  address!: string;
  showAddress: boolean = false; 

  constructor(private route: ActivatedRoute, private addressService: AddressService) {}

  ngOnInit(): void {
    //CODIGO ANTIGO this.userData = history.state.userData;

const storedData = localStorage.getItem('cadastroData');

if (storedData && document.getElementById('profileData')) {
    const userData = JSON.parse(storedData);
    
    const profileHtml = `
        <p><strong>Name:</strong> ${userData.nome}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Date of Birth:</strong> ${userData.dataNascimento}</p>
        <p><strong>Weight:</strong> ${userData.peso} kg</p>
        <p><strong>Height:</strong> ${userData.altura} cm</p>
    `;

    const profileDataElement = document.getElementById('profileData');

    if (profileDataElement) {
        profileDataElement.innerHTML = profileHtml;
    } else {
        console.error("Element with ID 'profileData' not found.");
    }
} else {
    console.error("No profile data found or element with ID 'profileData' not found.");
}

  }

  searchAddress(): void {
    this.addressService.get(this.cep).subscribe(data => {
      this.address = `${data.logradouro} - ${data.bairro} - ${data.localidade}/${data.uf}`;
    });
    this.showAddress = true;
  }

}
