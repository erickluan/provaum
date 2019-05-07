import { Component, OnInit } from '@angular/core';

import { Pessoa } from './pessoa';

@Component({
  selector: 'app-questao03',
  templateUrl: './questao03.component.html',
  styleUrls: ['./questao03.component.css']
})
export class Questao03Component implements OnInit {
  titulo = 'Questão 03';
  descricao = 'Adicione pessoas a uma lista e saiba se ela é criança, adolescente, adulto ou idoso.';
  nomePessoa: string;
  idadePessoa: number;
  pessoas: Pessoa[] = [];

  constructor() { }

  ngOnInit() {
  }

  adicionarPessoa(nome, idade, inputs) {
    const pessoa = {
      nome,
      idade,
      tipo: ''
    };
    if (idade <= 12) {
      pessoa.tipo = 'Criança';
    } else if (13 <= idade && idade < 20) {
      pessoa.tipo = 'Adolescente';
    } else if (21 <= idade && idade < 65) {
      pessoa.tipo = 'Adulto';
    } else {
      pessoa.tipo = 'Idoso';
    }
    inputs.nomePessoa.value = '';
    inputs.idadePessoa.value = '';
    this.pessoas.push(pessoa);
  }
}
