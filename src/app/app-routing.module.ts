import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/LoginComponent';
import { HomeComponent } from './pages/home/home.component';
import { AutorizadoGuard } from './guard/autorizado.guard';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AutorizadoGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
