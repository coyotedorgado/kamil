import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TpPagamentoServiceService {
  public async tipos() {
    var data = await  fetch('http://localhost:3000/pagamentos')
    var tipos = data.json()
    return tipos
  }
  public async addTipo(tipo: string) {
    var nomeIgual = false 
    var tipos = await this.tipos()
    for(let i = 0; i < tipos.length; i++) {
      if(tipo == tipos[i].pagamentos){
        nomeIgual = true
        break
      }
    }
    if(nomeIgual == false) {
      fetch(`http://localhost:3000/pagamentos/adicionar/${tipo}`, {method: "post"})
    }
    return nomeIgual
  }
}
