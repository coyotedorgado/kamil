import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroServiceService {

  constructor() { }

  public async dadosServicos() {
    var res = await fetch('http://localhost:3000/servicos')
    var servicos = await res.json()
    return servicos
  }

  public async adicionarServico(servico: string, comissao: number) {
    var servicos = await this.dadosServicos()
    var nomeIgual = false
    for(let i = 0; i < servicos.length; i++) {
      if(servico.toLowerCase() == servicos[i].servico) {
        console.log('nome igual')
        nomeIgual = true
        return nomeIgual
      }
    }
    if(nomeIgual == false) {
      fetch(`http://localhost:3000/servicos/addServico/${servico}/${comissao}`, {method: "post"})
      console.log("servico adicionado")
    }
    return nomeIgual
  }
}