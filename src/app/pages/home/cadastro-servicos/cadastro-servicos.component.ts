import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CadastroServiceService } from 'src/app/service/cadastro-service.service';

@Component({
  selector: 'app-cadastro-servicos',
  templateUrl: './cadastro-servicos.component.html',
  styleUrls: ['./cadastro-servicos.component.scss']
})
export class CadastroServicosComponent {

  public nomeIgual = false
  public msgAdd = false

  constructor(private fb: FormBuilder, private cadastroService: CadastroServiceService) {}

  form = this.fb.group({
    servico: ['', Validators.required],
    comissao: ['', Validators.required]
  })

  public async addServico() {
    this.nomeIgual = false
    this.msgAdd = false
    var servico = this.form.value.servico!
    var comissao = Number(this.form.value.comissao!)
    if(await this.cadastroService.adicionarServico(servico, comissao) == true) {
      this.nomeIgual = true
    }else{
      this.msgAdd = true
    }
    this.form.setValue({
      servico: '',
      comissao: ''
    })
  }
}
