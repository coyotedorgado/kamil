import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutorizacaoService } from '../service/autorizacao.service';

@Injectable({
  providedIn: 'root'
})
export class autorizadoGuard {

  constructor(
    private autorizadoService: AutorizacaoService,
    private routerService: Router
    ){}

   async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree> {
      if(await this.autorizadoService.checkToken() == true) {
        return true
      } else {
        this.routerService.navigate(['/login'])
        return false
      }
  }
}