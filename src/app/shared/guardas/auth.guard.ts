import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); 

  const isLogged = !!localStorage.getItem('loggedUser');

    if (isLogged) {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }

  };
