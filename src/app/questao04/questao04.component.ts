import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pessoa } from '../questao03/pessoa';

@Component({
  selector: 'app-questao04',
  templateUrl: './questao04.component.html',
  styleUrls: ['./questao04.component.css']
})
export class Questao04Component implements OnInit {
  titulo = 'Questão 04';
  constructor() { }
  @Output() people: EventEmitter<Pessoa> = new EventEmitter();
  ngOnInit() {
  }
  enviarProPai(nome, idade, inputs) {
    const pessoa: Pessoa = new Pessoa();
    pessoa.nome = nome;
    pessoa.idade = idade;
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
    this.people.emit(pessoa);
  }
}
