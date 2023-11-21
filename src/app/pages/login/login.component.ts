import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public us: string = '';
  public se: string = '';
  public contFocus: number = 0;
  public focus1: boolean = true;
  public focus2: boolean = false;
  public focus3: boolean = false;
  public msgError: boolean = true;
  public usuario: string = "vania fernandes";
  public senha: string = "sis2013";

  constructor(private router: Router) {}
  // public verifyFocus() {
  //   if (this.contFocus == 0) {
  //     this.focus1 = this.focus1!
  //   }
  //   this.contFocus = this.contFocus + 1
  // }
  public checkLogin(usuario: string, senha: string) {
    if(usuario == this.usuario && senha == this.senha){
      this.router.navigate(['/home']);
    }else{
      this.msgError = false
    }
  }
}
