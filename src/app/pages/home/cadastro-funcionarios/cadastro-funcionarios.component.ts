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
    } 
  }
}
