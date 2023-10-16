import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from './../../../auth/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  //selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ]

constructor(
  private authService: AuthService,
  private router: Router,
  ){}

get user(): User | undefined{
  return  this.authService.currentUser;
}


  onLogout(){
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }





}
