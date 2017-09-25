import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AlunosComponent } from './alunos/alunos.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FootnoteComponent } from './footnote/footnote.component';
import 'hammerjs';
import { CadastroComponent } from './alunos/cadastro/cadastro.component';
import { AlunoComponent } from './alunos/aluno/aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlunosComponent,
    HomeComponent,
    AboutComponent,
    FootnoteComponent,
    CadastroComponent,
    AlunoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
