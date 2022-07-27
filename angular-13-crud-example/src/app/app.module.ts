import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

import { AddAssociadoComponent } from './components/add-associado/add-associado.component';
import { AddFuncionarioComponent } from './components/add-funcionario/add-funcionario.component';
import { AddPublicacaoComponent } from './components/add-publicacao/add-publicacao.component';
import { AddExemplarComponent } from './components/add-exemplar/add-exemplar.component';
import { AddEmprestimoComponent } from './components/add-emprestimo/add-emprestimo.component';
import { PublicacaoListComponent } from './components/publicacao-list/publicacao-list.component';
import { FuncionarioLoginComponent } from './components/funcionario-login/funcionario-login.component';
import { AssociadoLoginComponent } from './components/associado-login/associado-login.component';
import { AddReservaComponent } from './components/add-reserva/add-reserva.component';
import { DevolverEmprestimoComponent } from './components/devolver-emprestimo/devolver-emprestimo.component';
import { AnularReservaComponent } from './components/anular-reserva/anular-reserva.component';
import { AtrasadoEmprestimoComponent } from './components/atrasado-emprestimo/atrasado-emprestimo.component';
import { AssociadoLogoutComponent } from './components/associado-logout/associado-logout.component';
import { FuncionarioLogoutComponent } from './components/funcionario-logout/funcionario-logout.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    AddAssociadoComponent,
    AddFuncionarioComponent,
    AddPublicacaoComponent,
    AddPublicacaoComponent,
    AddExemplarComponent,
    AddEmprestimoComponent,
    PublicacaoListComponent,
    FuncionarioLoginComponent,
    AssociadoLoginComponent,
    AddReservaComponent,
    DevolverEmprestimoComponent,
    AnularReservaComponent,
    AtrasadoEmprestimoComponent,
    AssociadoLogoutComponent,
    FuncionarioLogoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
