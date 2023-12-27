import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CadastroServiceService } from 'src/app/service/cadastro-service.service';

@Component({
  selector: 'app-cadastro-servicos',
  templateUrl: './cadastro-servicos.component.html',
  styleUrls: ['./cadastro-servicos.component.scss']
})
export class CadastroServicosComponent {

  constructor(private fb: FormBuilder, private cadastroService: CadastroServiceService) {}

  form = this.fb.group({
    servico: ['', Validators.required],
    comissao: ['', Validators.required]
  })

  public addServico() {
    console.log(this.form.value.servico, this.form.value.comissao)
    this.form.setValue({
      servico: '',
      comissao: ''
    })
  }
}
