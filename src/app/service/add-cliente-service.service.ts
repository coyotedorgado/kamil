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
  try{
    const res = await fetch(`http://localhost:3000/clientes`);
    if (!res.ok) {
      throw new Error(`Erro na requisição: ${res.status}`);
    }
    return res.json();
  }catch(error) {
    console.log(error)
    throw error
  }
}
//////////////////////////////////////////////////////
public async carregarClientes() {
  fetch(`http://localhost:3000/clientes`)
  .then((res)=>{
    return res.json()
  })
  .then((dataCli)=>{
    for(let i = 0; i < dataCli.length; i++) {
      setTimeout(() => {
        var id = document.createTextNode(`${dataCli[i].nomeId}`)
        var nome = document.createTextNode(`${dataCli[i].nome}`)
  
        var tdId = document.createElement("td")
        var tdNome = document.createElement("td")
  
        tdId.appendChild(id)
        tdNome.appendChild(nome)
  
        var tr = document.createElement("tr")
  
        tr.appendChild(tdId)
        tr.appendChild(tdNome)
  
        tr.style.width = '100%'
        tr.style.display = 'flex'
  
        tdId.style.verticalAlign = 'middle'
        tdId.style.border = '1px solid black'
        tdId.style.textAlign = 'center'
        tdId.style.width = '50%'
  
        tdNome.style.verticalAlign = 'middle'
        tdNome.style.border = '1px solid black'
        tdNome.style.textAlign = 'center'
        tdNome.style.width = '50%'
  
        var table = document.getElementById("table")!
  
          table.appendChild(tr)
      },i * 100);
    }
  })
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
