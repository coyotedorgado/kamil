import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { AutorizacaoService } from 'src/app/service/autorizacao.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public us: string = '';//variavel vinda do input
  public se: string = '';//variavel vinda de input
  public msgError: boolean = true;
  public data: Date = new Date();
  public count: number = 0;

  constructor(private serviceAuth: AutorizacaoService) { }
  ngOnInit(): void {
    if(this.count == 0){
      var element = document.getElementsByClassName("inputs")
      if(element.length > 0) {
        var inputElement = element[0] as HTMLElement
        inputElement.focus()
      }
    }
  }
  //altera o eutofocus dos input/"atalhos de tecla" 
  public alterFocus() {
    var element = document.getElementsByClassName("inputs")
    this.count = this.count + 1
    switch(this.count) {
      case 0:
        var inputElement = element[0] as HTMLElement
        inputElement.focus();
        break
      case 1:
        var inputElement = element[1] as HTMLElement
        inputElement.focus();
        break
      case 2:
        this.checkLogin(this.us, this.se)
    }
  }
  public checkLogin(usuario: string, senha: string) {
    if(this.serviceAuth.saveToken(usuario, senha) == false) {
      this.msgError = false
    }
  }
}
