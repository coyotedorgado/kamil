import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AutorizacaoService {
  usuario = "";
  senha = "";
  constructor(private router: Router, private http: HttpClient) {}
  async checkToken() {
    var autorizado = false;
    await fetch(`http://localhost:3000/tokenValidation?token=${sessionStorage.getItem('token')}`)
    .then(async res=>{
      if(await res.json()){
        autorizado = true
      }
    })
    return autorizado
  }
  chechAuth(usuario: string, senha: string): Observable<any> {
    this.usuario = usuario
    this.senha = senha
    const optios: HttpParamsOptions = {
      fromString: `usuario=${usuario}&senha=${senha}`
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    const params = new HttpParams(optios)
    return this.http.get('http://localhost:3000/login', {params, headers})
  }
  saveToken(usuario: string, senha: string): boolean {
    var autorizado = false;
    var  result = this.chechAuth(usuario, senha)
    result.subscribe(
      data => {
        if(data.boolean) {
          sessionStorage.setItem('token', data.token)
          
          autorizado = true
          this.router.navigate(['/home'])
        }else{
          autorizado = false
        }
      }
      )
      if(autorizado){
        return true
      }else{
        return false
      }
  }
}
