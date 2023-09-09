import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  mostrarMenu = new Subject<boolean>();
  constructor() {}

  login(usuario: string, senha: string) {
    if (usuario == 'aluno' && senha == '12345') {
      localStorage.setItem('token', 'qwer12345');
      this.mostrarMenu.next(false);
    } else {
      this.mostrarMenu.next(true);
      window.location.reload();
    }
  }

  setMostrarMenu(valor: boolean) {
    this.mostrarMenu.next(valor);
  }
  getMostrarmenu() {
    return this.mostrarMenu.asObservable();
  }
}
