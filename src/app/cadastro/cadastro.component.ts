import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})

export class CadastroComponent implements OnInit {

  cadastroForm!: FormGroup;
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.cadastroForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dataNascimento: new FormControl('', Validators.required),
      peso: new FormControl('', Validators.required),
      altura: new FormControl('', Validators.required),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmarSenha: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    
    if (this.cadastroForm.valid && this.cadastroForm.value.senha === this.cadastroForm.value.confirmarSenha) {
      const userCode = Math.floor(1000 + Math.random() * 9000);
      const formData = this.cadastroForm.value;
      formData.codigoUsuario = userCode;
      localStorage.setItem('cadastroData', JSON.stringify(formData));
      alert('Formulario enviado');
      // console.log('Formulário enviado e dados salvos no local storage:', formData);
      this.cadastroForm.reset();
      this.router.navigate(['/login']);
    } else {
      alert("Formulário inválido, confira os dados");
      // this.showError = true; 
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}