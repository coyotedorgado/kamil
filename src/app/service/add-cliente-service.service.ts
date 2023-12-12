import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddClienteServiceService implements OnInit{
  NomeIgual: boolean = false

ngOnInit(): void {
}

constructor() { }
//////////////////////////////////////////////////////
public async dadosClientes() {
    const res = await fetch(`http://localhost:3000/clientes`);
    return res.json();
}
//////////////////////////////////////////////////////
  public async insertCli(nome: string) {
    this.NomeIgual = false
      var nomes = await this.dadosClientes()
      for(let i = 0; i < nomes.length; i++) {
        if(nome == nomes[i].nome) {
          this.NomeIgual = true
        }
      }
      if(nome == '') {
        return
      }
        if(this.NomeIgual == false) {
          console.log("nome diferente")
          const res = await fetch(`http://localhost:3000/addClientes/${nome}`)
          console.log(`O cliente ${nome} foi adicionado`)
        }else{
          console.log("nome igual")
        }
  }
}
