import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutorizacaoService } from 'src/app/service/autorizacao.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public us: string = '';//variavel vinda do input
  public se: string = '';//variavel vinda de input
  public msgError: boolean = true;

  constructor(private serviceAuth: AutorizacaoService) { }
  
  public checkLogin(usuario: string, senha: string) {
    this.serviceAuth.chechAuth(usuario, senha) // chama a funcao de verificaçao
    if(this.serviceAuth.chechAuth(usuario, senha) == false) {// verifica se a funcao retorna false
      this.msgError == false
    }
  }
}
