import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutorizacaoService {
  autorizado = false
  usuario = "v";
  senha = "s";
  constructor(private router: Router) {}
  chechAuth(usuario: string, senha: string) {
    if(usuario == this.usuario && senha == this.senha) {
      this.autorizado = true
      this.router.navigate(['/home'])
    }
    return false
  }
}
