import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidatorService } from '../shared/services/custom-validator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [CustomValidatorService],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})

export class CadastroComponent {

  form = new FormGroup({
    nome: new FormControl('', [Validators.required, this.customValidatorService.validarNomeCompleto()]),
    email: new FormControl('', [Validators.required, Validators.email]),
    dataNascimento: new FormControl('', Validators.required),
    peso: new FormControl('', [Validators.required, Validators.max(300)]),
    altura: new FormControl('', [Validators.required, Validators.max(280)]),
    senha: new FormControl('', [Validators.minLength(4), Validators.required]),
    confirmarSenha: new FormControl('', [Validators.minLength(4), Validators.required]),
    codigoUsuario: new FormControl('')
  });

  constructor(
    private customValidatorService: CustomValidatorService,
    private Router: Router) { }

  cadastrar() {
    const listaUsers = localStorage.getItem('cadastroData');
    const users = listaUsers ? JSON.parse(listaUsers) : [];

    const existingUser = users.find((user: any) => user.email === this.form.value.email);

    if (existingUser) {
      alert('User already exists.');
      
    } else {

      if (this.form.valid && this.form.value.senha === this.form.value.confirmarSenha) {

        const userCode = Math.floor(1000 + Math.random() * 9000);
        this.form.patchValue({ codigoUsuario: userCode.toString() });

        users.push(this.form.value);
        localStorage.setItem('cadastroData', JSON.stringify(users));
        
        this.form.controls['nome'].setValue('');
        this.form.controls['email'].setValue('');
        this.form.controls['dataNascimento'].setValue('');
        this.form.controls['peso'].setValue('');
        this.form.controls['altura'].setValue('');
        this.form.controls['senha'].setValue('');
        this.form.controls['confirmarSenha'].setValue('');

        this.Router.navigate(['/login']);
      } else {
        alert('formulario invalido');
      }
    }
  }

goToLogin(){
  this.Router.navigate(['/login']);
}

}