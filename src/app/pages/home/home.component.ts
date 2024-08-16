import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.estiloh1();
  }
  
  estiloh1(){
    const hexadecimal = "0123456789abcdef";
    var h1_estiloso = document.getElementById("h1")!;
    var cor = "2px solid #"
    for(let i = 0; i < 6; i++){
      var numero_aleatorio = Math.floor(Math.random() * 16);
      cor = cor + hexadecimal[numero_aleatorio];
    }
    h1_estiloso.style.borderBottom = cor;
  }
}
