import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/LoginComponent';
import { HomeComponent } from './pages/home/home.component';
import { AutorizadoGuard } from './guard/autorizado.guard';
import { LancarCComponent } from './pages/home/lancar-c/lancar-c.component';
import { CadastroClienteComponent } from './pages/home/cadastro-cliente/cadastro-cliente.component';
import { CadastroFuncionariosComponent } from './pages/home/cadastro-funcionarios/cadastro-funcionarios.component';
import { TiposPagamentosComponent } from './pages/home/tipos-pagamentos/tipos-pagamentos.component';
import { CadastroServicosComponent } from './pages/home/cadastro-servicos/cadastro-servicos.component';
import { ContasPagarComponent } from './pages/home/contas-pagar/contas-pagar.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AutorizadoGuard]},
  {path: 'home/lancarC', component: LancarCComponent, canActivate: [AutorizadoGuard]},
  {path: 'home/cadastroCli', component: CadastroClienteComponent, canActivate: [AutorizadoGuard]},
  {path: 'home/cadastroFun', component: CadastroFuncionariosComponent, canActivate: [AutorizadoGuard]},
  {path: 'home/tiposPagamento', component: TiposPagamentosComponent, canActivate: [AutorizadoGuard]},
  {path: 'home/cadastroServ', component: CadastroServicosComponent, canActivate: [AutorizadoGuard]},
  {path: 'home/contasPagar', component: ContasPagarComponent, canActivate: [AutorizadoGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
