import { AfterViewInit, Component } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { AddContasService } from 'src/app/service/add-contas.service';

@Component({
  selector: 'app-contas-pagar',
  templateUrl: './contas-pagar.component.html',
  styleUrls: ['./contas-pagar.component.scss']
})
export class ContasPagarComponent implements AfterViewInit {
  public displayPrincipal: boolean = true;
  public msgButton: string = "Adicionar Conta";
  
  constructor(private fb: FormBuilder, private addConta: AddContasService) {}

  public removerConta(id: number) {
    this.addConta.removerBoleto(id)
  }

  public async exibirContas() {
    var table = document.getElementById("table")!
      var contas = await this.addConta.contas()

    for(let i = 0; i < contas.length; i++) {
      var tr = document.createElement("tr")
      //texto dos td´s
      var beneficiario = document.createTextNode(contas[i].beneficiario)
      var valor = document.createTextNode(contas[i].valor)
      var vencimento = document.createTextNode(contas[i].dataVencimento.slice(0, 10).split('-').reverse().join('/'))
      var check = document.createElement("input")!
      check.type = 'checkbox'
      check.onclick = ()=> {
        this.removerConta(i)
      }

      var tdBen = document.createElement("td")
      var tdValor = document.createElement("td")
      var tdVencimento = document.createElement("td")
      var tdCheck = document.createElement("td")

      tdBen.style.fontSize = '11px'
      tdValor.style.fontSize = '11px'
      tdVencimento.style.fontSize = '11px'
      tdCheck.style.fontSize = '11px'
      tdBen.style.display = 'flex'
      tdValor.style.display = 'flex'
      tdVencimento.style.display = 'flex'
      tdCheck.style.display = 'flex'
      tdBen.style.border = '1px solid black'
      tdValor.style.border = '1px solid black'
      tdVencimento.style.border = '1px solid black'
      tdCheck.style.border = '1px solid black'
      tdBen.style.width = '25%'
      tdValor.style.width = '25%'
      tdVencimento.style.width = '25%'
      tdCheck.style.width = '25%'
      tdBen.style.alignItems = 'center'
      tdValor.style.alignItems = 'center'
      tdVencimento.style.alignItems = 'center'
      tdCheck.style.alignItems = 'center'
      tdBen.style.justifyContent = 'center'
      tdValor.style.justifyContent = 'center'
      tdVencimento.style.justifyContent = 'center'
      tdCheck.style.justifyContent = 'center'


      tdBen.appendChild(beneficiario)
      tdValor.appendChild(valor)
      tdVencimento.appendChild(vencimento)
      tdCheck.appendChild(check)

      tr.appendChild(tdBen)
      tr.appendChild(tdValor)
      tr.appendChild(tdVencimento)
      tr.appendChild(tdCheck)

      tr.style.height = '25px'
      tr.style.width = '100%'
      tr.style.display = 'flex'
      tr.style.verticalAlign = 'middle'
      
      table.appendChild(tr)
    }
  }
  
  public async escoderAddContas() {
    if(this.displayPrincipal == true){
      this.msgButton = "Visualizar Contas"
      this.displayPrincipal = false
    }else{
      this.msgButton = "Adicionar Conta"
      this.displayPrincipal = true

      setTimeout(() => {
      this.exibirContas()
      }, 200);
    }
  }
  async ngAfterViewInit() {
    this.exibirContas()
  }

  form = this.fb.group({
    beneficiario: ['Comepi', Validators.required]!,
    valor: ['', Validators.required]!,
    data: ['', Validators.required]!
  })
  public formC() {
    var beneficiario = this.form.value.beneficiario!
    var valor = this.form.value.valor!
    var data = this.form.value.data!
    this.addConta.adicionarConta(beneficiario, valor, data)
    this.form.setValue({
      beneficiario: '',
      valor: '',
      data: ''
    })
  }

}
