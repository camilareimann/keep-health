import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DietComponent } from './dietas/diet.component';
import { DietDetailComponent } from './diet-detail/diet-detail.component';
export const routes: Routes = [

    {
        path: "", //Rota inicial (assim que o projeto é 'buildado' ele entra nessa rota)
        redirectTo: "login", //redirecionamento (qual path que será redirecionado ao entrar na rota "")
        pathMatch: "full" //significa que a rota (path) deve ser inteiramente compatível com o redirectTo
    },
    {
        path: "cadastro", //rota para cadastro no portal
        component: CadastroComponent
    },
    {
        path: "login", //rota para cadastro no portal
        component: LoginComponent
    },
    {
        path: "perfil", //rota para cadastro no portal
        component: PerfilComponent
    },
    {
        path: 'diet',
        children: [
          { path: '', component: DietComponent },
          { path: ':id', component: DietDetailComponent },
        ]
      },
];
