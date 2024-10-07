import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-lancar-c',
  templateUrl: './lancar-c.component.html',
  styleUrls: ['./lancar-c.component.scss']
})
export class LancarCComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.alternar_cor();
    //chama a funcao de inserir os clientes no data list do html
    this.inserirClientes();
  }
  public async inserirClientes(){
    var lista_clients = document.getElementById("lista_clientes");
    var requisicao = await fetch("http://localhost:3000/clientes");
    var clientes = await requisicao.json()
    for(let i = 0; i < clientes.length; i++){
      //cria o elemento option atribue o value(nome do cliente) e  o inserir no datalist
      const option = document.createElement("option");
      option.value = clientes[i].nome;
      lista_clients?.appendChild(option);
    }
  }
  // funçao estilizadora do fundo que troca a troca toda vez que mover o mouse
  public alternar_cor(){
    var el = document.getElementById("body")!;
    var cor1 = Math.floor(Math.random() * 255);
    var cor2 = Math.floor(Math.random() * 255);
    var cor3 = Math.floor(Math.random() * 255);
    el.style.background = `rgba(${cor1}, ${cor2}, ${cor3}, 0.2)`;
  }

}