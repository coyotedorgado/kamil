import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/LoginComponent';
import { FormsModule } from '@angular/forms';
import { LancarCComponent } from './pages/home/lancar-c/lancar-c.component';
import { CadastroClienteComponent } from './pages/home/cadastro-cliente/cadastro-cliente.component';
import { CadastroFuncionariosComponent } from './pages/home/cadastro-funcionarios/cadastro-funcionarios.component';
import { TiposPagamentosComponent } from './pages/home/tipos-pagamentos/tipos-pagamentos.component';
import { CadastroServicosComponent } from './pages/home/cadastro-servicos/cadastro-servicos.component';
import { ContasPagarComponent } from './pages/home/contas-pagar/contas-pagar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LancarCComponent,
    CadastroClienteComponent,
    CadastroFuncionariosComponent,
    TiposPagamentosComponent,
    CadastroServicosComponent,
    ContasPagarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
