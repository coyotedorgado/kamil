import { Injectable, OnInit } from '@angular/core';
import { METHODS } from 'http';

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
        var id = document.createTextNode(`${dataCli[i].nomeId}`)
        var nome = `${dataCli[i].nome}`
  
        var tdId = document.createElement("td")
        var tdNome = document.createElement("input")
        tdNome.classList.add("input");
        tdNome.classList.add("is-small");
        
        tdId.appendChild(id)
        tdNome.value = nome;
        tdNome.addEventListener('keydown', (event: KeyboardEvent)=>{
          if(event.key == "Enter"){
            this.updateClient(dataCli[i].nomeId, tdNome.value);
          }
        })
  
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
    }
  })
}
//////////////////////////////////////////////////////
  async updateClient(id: number, nome: string) {
  var request = await fetch(`http://localhost:3000/updateClient/${id}/${nome}`)
  if(request.ok){
    alert('cliente ' + id + ' foi alterado com sucesso!');
    location.reload();
  }
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
          fetch(`http://localhost:3000/addClientes/${nome}`)
          console.log(`O cliente ${nome} foi adicionado`)
        }
  }
}
