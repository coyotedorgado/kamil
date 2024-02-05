import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutorizacaoService {
  autorizado = true;
  usuario = "vaniafernandes";
  senha = "sis2013";
  constructor(private router: Router, private http: HttpClient) {}
  // this.router.navigate(['/home'])
  chechAuth(usuario: string, senha: string) {

  }

}
