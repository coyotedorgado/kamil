import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TpPagamentoServiceService } from 'src/app/service/tp-pagamento-service.service';

@Component({
  selector: 'app-tipos-pagamentos',
  templateUrl: './tipos-pagamentos.component.html',
  styleUrls: ['./tipos-pagamentos.component.scss']
})
export class TiposPagamentosComponent {
  public displayPrincipal = true
  public nomeIgual = false
  public msgOk = false
  public msgDisplayButton = "Adicionar Pagamento"
  constructor(private fb: FormBuilder, private tiposService: TpPagamentoServiceService) {}
  form = this.fb.group({
    pagamento: ['', Validators.required]
  })
  public async addPagamento() {
    this.msgOk = false
    var tipo = this.form.value.pagamento!
    if( await this.tiposService.addTipo(tipo)) {
      this.nomeIgual = true
    }else{
      this.msgOk = true
    }
    this.form.setValue({
      pagamento: ''
    })
  }
  public alterarDisplay() {
    if(this.displayPrincipal == true) {
      this.msgDisplayButton = "Adicionar Pagamento"
      this.displayPrincipal = false
    }else{
      this.msgDisplayButton = "Pagamentos"
      this.displayPrincipal = true
    }
  }
}
