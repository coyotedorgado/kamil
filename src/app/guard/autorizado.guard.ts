import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutorizacaoService } from '../service/autorizacao.service';

@Injectable({
  providedIn: 'root'
})
export class AutorizadoGuard {

  constructor(
    private autorizadoService: AutorizacaoService,
    private routerService: Router
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.autorizadoService.autorizado == true) {
        return true
      } else {
        this.routerService.navigate(['/login'])
        return false
      }
  }
}