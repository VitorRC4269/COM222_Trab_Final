import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssociadoComponent } from './components/add-associado/add-associado.component';
import { AddFuncionarioComponent } from './components/add-funcionario/add-funcionario.component';
import { AddPublicacaoComponent } from './components/add-publicacao/add-publicacao.component';
import { AddExemplarComponent } from './components/add-exemplar/add-exemplar.component';
import { AddEmprestimoComponent } from './components/add-emprestimo/add-emprestimo.component';
import { FuncionarioLoginComponent } from './components/funcionario-login/funcionario-login.component';
import { AssociadoLoginComponent } from './components/associado-login/associado-login.component';
import { PublicacaoListComponent } from './components/publicacao-list/publicacao-list.component';
import { AddReservaComponent } from './components/add-reserva/add-reserva.component';
import { AnularReservaComponent } from './components/anular-reserva/anular-reserva.component';
import { AtrasadoEmprestimoComponent } from './components/atrasado-emprestimo/atrasado-emprestimo.component';
import { DevolverEmprestimoComponent } from './components/devolver-emprestimo/devolver-emprestimo.component';
import { FuncionarioLogoutComponent } from './components/funcionario-logout/funcionario-logout.component';

const routes: Routes = [
  { path: '', redirectTo: 'associadoLogin', pathMatch: 'full' },
 
  { path: 'addAssociado', component: AddAssociadoComponent },
  { path: 'addFuncionario', component: AddFuncionarioComponent },
  { path: 'addPublicacao', component: AddPublicacaoComponent },
  { path: 'addExemplar', component: AddExemplarComponent },
  { path: 'addEmprestimo', component: AddEmprestimoComponent },
  { path: 'funcionarioLogin', component: FuncionarioLoginComponent },
  { path: 'associadoLogin', component: AssociadoLoginComponent },
  { path: 'publicacaoList', component: PublicacaoListComponent },
  { path: 'addReserva', component: AddReservaComponent },
  { path: 'anularReserva', component: AnularReservaComponent },
  {path: 'atrasadoEmprestimo', component: AtrasadoEmprestimoComponent},
  {path: 'devolverEmprestimo', component: DevolverEmprestimoComponent},
  {path: 'funcionarioLogout', component: FuncionarioLogoutComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
