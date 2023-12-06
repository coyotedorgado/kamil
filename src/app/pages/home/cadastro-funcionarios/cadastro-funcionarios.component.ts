import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { takeLast } from 'rxjs';

@Component({
  selector: 'app-cadastro-funcionarios',
  templateUrl: './cadastro-funcionarios.component.html',
  styleUrls: ['./cadastro-funcionarios.component.scss']
})
export class CadastroFuncionariosComponent implements OnInit, AfterViewInit {
  public count: number = 0;
  public elements = document.getElementsByClassName("content");
  public funcRepetido: string = '';
  public displayPrincipal: boolean = true;
  public msgError: boolean = false;
  
  constructor(private fb: FormBuilder) {
    
  }
  form = this.fb.group({
    nome: ['', Validators.required],
    profissao: ['', Validators.required],
    sexo: ['', Validators.required]
  })
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    var inputElement = this.elements[0] as HTMLElement
    inputElement.focus()
  }
  async dadosFuncionarios() {
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
  public escoderFuncioAdd() {
    if(this.displayPrincipal == true){
      this.displayPrincipal = false
      this.dadosFuncionarios()
    }else{
      this.displayPrincipal = true
    }
  }
  public teste() {
    var nomeIgual = 0;
    fetch(`http://localhost:3000/funcionarios`)
    .then((res)=>{
      return res.json()
    })
    .then(data => {
      console.log(data)
      for(let i = 0; i < data.length; i++){
        if(data[i].nome == this.form.value.nome){
          nomeIgual = nomeIgual + 1
        }
      }
      if(nomeIgual == 0) {
        console.log('tudo certo')
        if(this.form.value.nome == '' || this.form.value.profissao == '' || this.form.value.sexo == '') {
          return
        }
        alert(`Funcionario ${this.form.value.nome} adicionado!`)
        fetch(`http://localhost:3000/addFuncio/${this.form.value.nome}/${this.form.value.profissao}/${this.form.value.sexo}`)
        .then((res)=> {
          return res.json()
        })
        .then(data => {

          this.msgError = false
          var table = document.getElementById("table")!;

          var nomeValue = document.createTextNode(`${this.form.value.nome}`)
          var profissaoValue = document.createTextNode(`${this.form.value.profissao}`)
          var sexoValue = document.createTextNode(`${this.form.value.sexo}`)

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
              this.funcRepetido = this.form.value.nome!
              this.form.setValue({
                nome: '',
                profissao: '',
                sexo: ''
              })
              this.msgError = true
              console.log('tudo errado')
            }
            this.form.setValue({
              nome: '',
              profissao: '',
              sexo: ''
            })
          })
  }
  public exibir() {
    this.count = 2
    this.alterFocus()
  }
  //zerar o contador para evitar bug de chamar o caso 3 do swith
  public zerar() {
    this.msgError = false
    this.count = 0
  }
  public zerar1() {
    this.count = 1
  }
  public zerar2() {
    this.count = 2
  }
  public alterFocus() {
    console.log(this.count)
    this.count = this.count + 1
    switch(this.count) {
      case 0:
        var inputElement = this.elements[0] as HTMLElement
        inputElement.focus()
        break
      case 1:
        var inputElement = this.elements[1] as HTMLElement
        inputElement.focus()
        break
      case 2:
        var inputElement = this.elements[2] as HTMLElement
        inputElement.focus()
        break
      case 3:
        var inputElement = this.elements[3] as HTMLElement   
        inputElement.focus()
        this.teste()
    }
  }
}
