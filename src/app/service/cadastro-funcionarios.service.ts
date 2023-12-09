import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroFuncionariosService {
  public displayPrincipal: boolean = true;
  public msgError: boolean = false;

  public esconderFunciAdd() {
    if(this.displayPrincipal == true){
      this.displayPrincipal = false
      this.dadosFuncionarios()
    }else{
      this.displayPrincipal = true
    }
  }

  public verifyMsgError() {
    if(this.msgError == true) {
      return true
    }else{
      return false
    }
  }

  public principal(nome: string, profissao: string, sexo: string) {
    var nomeIgual = 0;
    fetch(`http://localhost:3000/funcionarios`)
    .then((res)=>{
      return res.json()
    })
    .then(data => {
      console.log(data)
      for(let i = 0; i < data.length; i++){
        if(data[i].nome == nome){
          nomeIgual = nomeIgual + 1
        }
      }
      if(nomeIgual == 0) {
        console.log('tudo certo')
        if(nome == '' || profissao == '' || sexo == '') {
          return
        }
        fetch(`http://localhost:3000/addFuncio/${nome}/${profissao}/${sexo}`)
        .then((res)=> {
          return res.json()
        })
        .then(data => {

          this.msgError = false
          var table = document.getElementById("table")!;

          var nomeValue = document.createTextNode(`${nome}`)
          var profissaoValue = document.createTextNode(`${profissao}`)
          var sexoValue = document.createTextNode(`${sexo}`)

          var tr = document.createElement("tr")

          var tdNome = document.createElement("td")
          var tdProfissao = document.createElement("td")
          var tdSexo = document.createElement("td")

          tdNome.appendChild(nomeValue)
          tdProfissao.appendChild(profissaoValue)
          tdSexo.appendChild(sexoValue)

          tr.appendChild(tdNome)
          tr.appendChild(tdProfissao)
          tr.appendChild(tdSexo)

          table.appendChild(tr)
              })
            }else{
              this.msgError = true
              console.log('tudo errado')
            }
          })
  }

  public async dadosFuncionarios() {
    
    await fetch(`http://localhost:3000/funcionarios`)
    .then((res)=>{
      return res.json()
    })
    .then(data => {
      var table = document.getElementById("table")!;
      for(let i = 0; i < data.length; i++) {
        //texto dos td`s
        var nome = document.createTextNode(`${data[i].nome}`)
        var profissao = document.createTextNode(`${data[i].tipo}`)
        var sexo = document.createTextNode(`${data[i].sexo}`)
        //td`s
        var tdNome = document.createElement("td")
        var tdProfissao = document.createElement("td")
        var tdSexo = document.createElement("td")
        //valores dos td`s
        tdNome.appendChild(nome)
        tdProfissao.appendChild(profissao)
        tdSexo.appendChild(sexo)
        //th
        var tr = document.createElement("tr")
        tr.appendChild(tdNome)
        tr.appendChild(tdProfissao)
        tr.appendChild(tdSexo)
        table.appendChild(tr)

        tdNome.style.border = "1px solid black"
        tdProfissao.style.border = "1px solid black"
        tdSexo.style.border = "1px solid black"
        
        tr.style.border = "1px solid black"
        
        tdNome.style.textAlign = "center"
        tdProfissao.style.textAlign = "center"
        tdSexo.style.textAlign = "center"
        
        tdNome.style.verticalAlign = "middle"
        tdProfissao.style.verticalAlign = "middle"
        tdSexo.style.verticalAlign = "middle"
      }
    })
  }
}
