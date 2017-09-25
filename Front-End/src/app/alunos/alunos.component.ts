import { Component, OnInit, Inject } from '@angular/core';
import {Aluno}  from './aluno/aluno.model';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'clif-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

alunos: Object[] = [];

  constructor(@Inject(Http) http) { 
   http.get('http://localhost:8080/webservice/rest/api/buscarTodos')
   .map( res => {
      return res.json();
    
    })
    .subscribe(alunos =>
      {
        this.alunos= alunos;
        console.log('alunos: '+this.alunos );
      })

  }

  ngOnInit() {
  }

}
