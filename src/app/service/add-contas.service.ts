import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddContasService {

  constructor() { }

  public async contas() {
    var res = await fetch('http://localhost:3000/contas')
    var data = await res.json()
    return data
  }

  public async removerBoleto(id: number) {
    id = id+1
    fetch(`http://localhost:3000/contas/removerConta/${id}`)
    console.log('foi removido uma conta', id)
  }
}
