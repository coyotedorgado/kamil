import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { CadastroFuncionariosService } from 'src/app/service/cadastro-funcionarios.service';

@Component({
  selector: 'app-cadastro-funcionarios',
  templateUrl: './cadastro-funcionarios.component.html',
  styleUrls: ['./cadastro-funcionarios.component.scss']
})
export class CadastroFuncionariosComponent implements OnInit, AfterViewInit {
  public count: number = 0;
  public displayPrincipal: boolean = true;
  public elements = document.getElementsByClassName("content");
  public funcRepetido: string = '';
  public msgError: boolean = false;
  public funcio: string = '';
  public funcioMsg: boolean = false;
  
  constructor(private fb: FormBuilder, public cadastroFunci: CadastroFuncionariosService) {
    
  }
  //este form abaixo esta servindo apenas para validaçao
  form = this.fb.group({
    nome: ['', Validators.required],
    profissao: ['', Validators.required],
    sexo: ['', Validators.required]
  })
  ////////////////////////////////////////////////////////
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    //apos o carregamento completo que este codigo carrega apar aevitar erros no terminal 
    var inputElement = this.elements[0] as HTMLElement
    inputElement.focus()
  }
  public escoderFuncioAdd() {
    //alterna entre a opçao de adicionar funcionarios e visualizar os mesmos
    if(this.displayPrincipal == true){
      this.displayPrincipal = false
      //chama o service que faz o carregamento do funcionarios apenas qunado quando esta na area de exibiçao dos mesmos
      this.cadastroFunci.dadosFuncionarios()
    }else{
      this.displayPrincipal = true
    }
  }
  public teste() {
    this.cadastroFunci.principal(this.form.value.nome!, this.form.value.profissao!, this.form.value.sexo!)
    if(this.cadastroFunci.verifyMsgError() == true) {
      this.msgError = false
      this.funcio = this.form.value.nome!
      this.funcioMsg = true
    }else{
      this.funcRepetido = this.form.value.nome!
      this.msgError = true
    }
    this.form.setValue({
      nome: '',
      profissao: '',
      sexo: ''
    })
  }
  public exibir() {
    this.count = 2
    this.alterFocus()
  }
  //zerar o contador para evitar bug de chamar o caso 3 do swith
  public zerar() {
    this.msgError = false
    this.count = 0
  }
  public zerar1() {
    this.count = 1
  }
  public zerar2() {
    this.count = 2
  }
  public alterFocus() {
    console.log(this.count)
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
        this.teste()
    }
  }
}
