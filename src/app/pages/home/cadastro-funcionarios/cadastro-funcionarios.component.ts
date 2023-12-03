import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-cadastro-funcionarios',
  templateUrl: './cadastro-funcionarios.component.html',
  styleUrls: ['./cadastro-funcionarios.component.scss']
})
export class CadastroFuncionariosComponent implements OnInit {
  public count: number = 0;
  public elements = document.getElementsByClassName("content");
  public funcRepetido = '';
  public msgError = false;
  
  constructor(private fb: FormBuilder) {}
  form = this.fb.group({
    nome: ['', Validators.required],
    profissao: ['', Validators.required],
    sexo: ['', Validators.required]
  })
  ngOnInit(): void {
    var inputElement = this.elements[0] as HTMLElement
    inputElement.focus()
    
  }
  resetForm() {
    this.form.setValue({
      nome: '',
      profissao: '',
      sexo: ''
    })
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
              fetch(`http://localhost:3000/addFuncio/${this.form.value.nome}/${this.form.value.profissao}/${this.form.value.sexo}`)
              .then((res)=> {
                return res.json
              })
              .then(data => {
                console.log(data)
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
    this.count = 0
  }
  public zerar1() {
    this.count = 1
  }
  public zerar2() {
    this.count = 2
  }
  public alterFocus() {
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
          // var button1: any = document.getElementById("input1")
          // var button2: any = document.getElementById("input2")
          // var button3: any = document.getElementById("input3")
          // button1.value = ''
          // button2.value = ''
          // button3.value = ''
        break
    }
  }
}
