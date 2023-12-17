import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AddContasService } from 'src/app/service/add-contas.service';

@Component({
  selector: 'app-contas-pagar',
  templateUrl: './contas-pagar.component.html',
  styleUrls: ['./contas-pagar.component.scss']
})
export class ContasPagarComponent {
  public displayPrincipal: boolean = true;
  public msgButton: string = "Adicionar Conta";

  constructor(private fb: FormBuilder, private addConta: AddContasService) {}

  form = this.fb.group({
    beneficiario: ['Comepi', Validators.required],
    valor: ['', Validators.required],
    data: ['', Validators.required]
  })
  public formC() {
    console.log(this.form.value.beneficiario, this.form.value.valor, this.form.value.data)
  }
  public escoderAddContas() {
    if(this.displayPrincipal == true){
      this.msgButton = "Visualizar Contas"
      this.displayPrincipal = false
    }else{
      this.msgButton = "Adicionar Conta"
      this.displayPrincipal = true
    }
  }

}
