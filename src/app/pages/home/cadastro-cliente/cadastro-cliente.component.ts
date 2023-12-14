import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AddClienteServiceService } from 'src/app/service/add-cliente-service.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent {
  public nomeIgual: boolean = false;
  public displayPrincipal: boolean = true;
  public displayCli: boolean = false;

  constructor(private addCliService: AddClienteServiceService, private fb: FormBuilder) {}

  form = this.fb.group({
    nome: ['', Validators.required]
  })
  public escoderFuncioAdd() {
    this.displayCli = false
    //alterna entre a opçao de adicionar clientes e visualizar os mesmos
    if(this.displayPrincipal == true){
      this.displayPrincipal = false
      //chama o service que faz o carregamento dos clientes apenas qunado quando esta na area de exibiçao dos mesmos
      this.addCliService.carregarClientes()
    }else{
      this.displayPrincipal = true
    }
  }
  public esconderPmsg() {
    this.nomeIgual = false
  }
  public async dadosCli() {
    this.nomeIgual = false
    var nome = this.form.value.nome!.toLocaleLowerCase().trim()
     var nomes = await this.addCliService.dadosClientes()
     for(let i = 0; i < nomes.length; i++) {
      if(nome == nomes[i].nome) {
        this.nomeIgual = true
        break
      }
    }
    if(this.nomeIgual == false){
      this.addCliService.insertCli(nome)
      this.displayCli = true
    }
    this.form.setValue({
      nome: ''
    })
  }
}