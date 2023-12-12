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

  constructor(private addCliService: AddClienteServiceService, private fb: FormBuilder) {}

  form = this.fb.group({
    nome: ['', Validators.required]
  })

  public esconderPmsg() {
    this.nomeIgual = false
  }
  public async dadosCli() {
    this.nomeIgual = false
     var nomes = await this.addCliService.dadosClientes()
     for(let i = 0; i < nomes.length; i++) {
      if(this.form.value.nome == nomes[i].nome) {
        this.nomeIgual = true
        break
      }
    }
    if(this.nomeIgual == false){
      this.addCliService.insertCli(this.form.value.nome!)
    }
    console.log("fim da execuçao")
    this.form.setValue({
      nome: ''
    })
  }
}