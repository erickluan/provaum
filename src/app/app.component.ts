import { Component, Input } from '@angular/core';
import { Pessoa } from './questao03/pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prova 1 - A';
  description = 'Avaliação dos conhecimentos de Angular.';
  acronym = 'P1';
  @Input() pessoas: Pessoa[] = [
    { idade: 25, nome: 'Erick', tipo: 'Adulto'},
    { idade: 24, nome: 'Jon Snow', tipo: 'Adulto'},
    { idade: 24, nome: 'Daenerys Targaryen', tipo: 'Adulto'},
  ];
  adicionarPessoa(pessoa: Pessoa) {
    console.log(pessoa);
    this.pessoas.push(pessoa);
  }
}
