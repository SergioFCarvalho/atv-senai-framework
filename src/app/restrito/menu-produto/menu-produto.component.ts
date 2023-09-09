import { Component } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-produto',
  templateUrl: './menu-produto.component.html',
  styleUrls: ['./menu-produto.component.css'],
})
export class MenuProdutoComponent {
  constructor(private _router: Router, private _loginService: LoginService) {}

  logout() {
    localStorage.clear();
    this._loginService.setMostrarMenu(true);
    this._router.navigate(['/login']);
  }
}
