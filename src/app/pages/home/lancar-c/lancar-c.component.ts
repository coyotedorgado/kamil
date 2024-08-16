import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-lancar-c',
  templateUrl: './lancar-c.component.html',
  styleUrls: ['./lancar-c.component.scss']
})
export class LancarCComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.alternar_cor()
  }

  public alternar_cor(){
    var el = document.getElementById("body")!;
    var hexadecimal = "0123456789abcdef";
    var cor = "#";
    for(let i = 0; i<6; i++){
      var numero_aleatorio = Math.floor(Math.random() * 16);
      cor = cor + hexadecimal[numero_aleatorio];
    }
    el.style.backgroundColor = cor;
  }
}
