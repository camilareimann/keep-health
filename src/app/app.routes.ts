import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DietComponent } from './dietas/diet.component';
import { ExerciciosComponent } from './exercicios/exercicios.component';
import { authGuard } from './shared/guardas/auth.guard';
import { DietDetailGuard } from './shared/guardas/verify-permition.guard';

export const routes: Routes = [

    {
        path: "", 
        redirectTo: "home", 
        pathMatch: "full" 
    },
    {
        path: "home",
        component: HomeComponent,
        canActivate: [authGuard]
    },
    {
        path: "exercicios",
        component: ExerciciosComponent,
        canActivate: [authGuard]
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "cadastro",
        component: CadastroComponent
    },
    {
        path: "perfil",
        component: PerfilComponent,
        canActivate: [authGuard]
    },
    {
        path: 'diet',
        component: DietComponent,
        canActivate: [authGuard],
    },
    {
        path: ':id',
        canActivateChild: [DietDetailGuard],
        loadChildren: () => import('./dietas/diet.module').then(m => m.DietModule)
    }
];
