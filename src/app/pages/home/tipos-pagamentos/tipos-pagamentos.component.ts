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
      setTimeout(() => {
        this.exibirTiposPagamentos()
      }, 10);
    }else{
      this.msgDisplayButton = "Pagamentos"
      this.displayPrincipal = true
    }
  }
  private async exibirTiposPagamentos() {
    var table = document.getElementById("table")
    var tipos = await this.tiposService.tipos()
    for(let i = 0; i < tipos.length; i++){
      var tr = document.createElement("tr")
      var valueNr = document.createTextNode(tipos[i].nrPagamento)
      var valuePagamentos = document.createTextNode(tipos[i].pagamentos)
      var tdNr = document.createElement("td")
      var tdPagamentos = document.createElement("td")
      //css do tr
      tr.style.height = "25px"
      tr.style.width = "100%"
      tr.style.display = "flex"
      tr.style.verticalAlign = "middle"
      //css do tdNr
      tdNr.style.verticalAlign = "middle"
      tdNr.style.border = "1px solid black"
      tdNr.style.textAlign = "center"
      tdNr.style.width = "50%"
      //css do tdPagamentos
      tdPagamentos.style.verticalAlign = "middle"
      tdPagamentos.style.border = "1px solid black"
      tdPagamentos.style.textAlign = "center"
      tdPagamentos.style.width = "50%"
      //coloca os valores de valueNr e valuePagamentos dentro de um td
      tdNr.appendChild(valueNr)
      tdPagamentos.appendChild(valuePagamentos)
      //coloca os tds dentro de tr
      tr.appendChild(tdNr)
      tr.appendChild(tdPagamentos)
      //por fim coloca o tr dentro da table
      table?.appendChild(tr)
    }
  }
}
