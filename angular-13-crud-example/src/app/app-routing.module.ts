import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { AddAssociadoComponent } from './components/add-associado/add-associado.component';
import { AddFuncionarioComponent } from './components/add-funcionario/add-funcionario.component';
import { AddPublicacaoComponent } from './components/add-publicacao/add-publicacao.component';
import { AddExemplarComponent } from './components/add-exemplar/add-exemplar.component';
import { AddEmprestimoComponent } from './components/add-emprestimo/add-emprestimo.component';
import { FuncionarioLoginComponent } from './components/funcionario-login/funcionario-login.component';
import { AssociadoLoginComponent } from './components/associado-login/associado-login.component';
import { PublicacaoListComponent } from './components/publicacao-list/publicacao-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'associadoLogin', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
  {path: 'addAssociado', component: AddAssociadoComponent},
  {path: 'addFuncionario', component: AddFuncionarioComponent},
  {path: 'addPublicacao', component: AddPublicacaoComponent},
  {path: 'addExemplar', component: AddExemplarComponent},
  {path: 'addEmprestimo', component: AddEmprestimoComponent},
  {path: 'funcionarioLogin', component: FuncionarioLoginComponent},
  {path: 'associadoLogin', component: AssociadoLoginComponent},
  {path: 'publicacaoList', component: PublicacaoListComponent},

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
