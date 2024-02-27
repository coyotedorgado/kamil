import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AutorizacaoService {
  autorizado = false;
  usuario = "";
  senha = "";
  constructor(private router: Router, private http: HttpClient) {}
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
    var  result = this.chechAuth(usuario, senha)
    result.subscribe(
      data => {
        if(data != false) {
          sessionStorage.setItem('token', data.token)
          this.autorizado = true
          this.router.navigate(['/home'])
        }else{
          this.autorizado = false
        }
      }
      )
      return this.autorizado
  }
}
