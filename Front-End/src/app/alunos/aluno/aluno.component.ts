import { Component, OnInit, Input } from '@angular/core';

import{Aluno} from './aluno.model';

@Component({
  selector: 'clif-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  @Input() alunoModel: Aluno;
  
    @Input() nome: string;
    @Input() sobrenome: string;
    @Input() cpf: string;
    @Input() telefone?: string;
    @Input() email?: string;
  
  constructor() { }

  ngOnInit() {
  }

}
