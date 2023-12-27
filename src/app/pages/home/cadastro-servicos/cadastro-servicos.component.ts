import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-servicos',
  templateUrl: './cadastro-servicos.component.html',
  styleUrls: ['./cadastro-servicos.component.scss']
})
export class CadastroServicosComponent {

  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    servico: ['', Validators.required],
    comissao: ['', Validators.required]
  })

}
