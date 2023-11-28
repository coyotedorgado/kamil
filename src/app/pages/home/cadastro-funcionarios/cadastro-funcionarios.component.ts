import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-funcionarios',
  templateUrl: './cadastro-funcionarios.component.html',
  styleUrls: ['./cadastro-funcionarios.component.scss']
})
export class CadastroFuncionariosComponent implements OnInit {
  public count: number = 0;
  public elements = document.getElementsByClassName("content")
  constructor() {}
  ngOnInit(): void {
    var inputElement = this.elements[0] as HTMLElement
    inputElement.focus()
  }
  //zerar o contador para evitar bug de chamar o caso 3 do swith
  public zerar() {
    this.count = 0
  }
  public zerar1() {
    this.count = 1
  }
  public zerar2() {
    this.count = 2
  }
  public alterFocus() {
    this.count = this.count + 1
    switch(this.count) {
      case 0:
        var inputElement = this.elements[0] as HTMLElement
        inputElement.focus()
        break
      case 1:
        var inputElement = this.elements[1] as HTMLElement
        inputElement.focus()
        break
      case 2:
        var inputElement = this.elements[2] as HTMLElement
        inputElement.focus()
        break
      case 3:
        var inputElement = this.elements[3] as HTMLElement
        inputElement.focus()
        break
    }
  }
}
