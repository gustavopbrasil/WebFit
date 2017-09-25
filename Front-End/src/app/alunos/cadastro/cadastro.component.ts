import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {AlunoComponent} from "../aluno/aluno.component";

@Component({
  selector: 'clif-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  aluno: AlunoComponent = new AlunoComponent();

  http: Http;

  private url: string = 'http://localhost:8080/webservice/rest/api/cadastrar';

  constructor(http: Http) {this.http = http; }

  ngOnInit() {
  }

  cadastrar(event) {
    event.preventDefault();
    console.log(this.aluno);

    // cria uma instância de Headers
    let headers = new Headers();

    // Adiciona o tipo de conteúdo application/json
    headers.append('Content-Type', 'application/json; charset=UTF-8');

    this.http.post(this.url,
      JSON.stringify(this.aluno), { headers: headers })
    .subscribe(() => {
        this.aluno = new AlunoComponent();
        console.log('Cadastrado com sucesso!');
    });
  }
}
