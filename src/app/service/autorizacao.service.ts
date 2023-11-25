import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutorizacaoService {
  autorizado = true;
  usuario = "vaniafernandes";
  senha = "sis2013";
  constructor(private router: Router) {}
  chechAuth(usuario: string, senha: string) {
    if(usuario == this.usuario && senha == this.senha) {//se usuario e senha que vem do input estiverem corretas liberar rota
      this.autorizado = true
      this.router.navigate(['/home'])
    }
    return false//senao retorna falso 
  }
}
