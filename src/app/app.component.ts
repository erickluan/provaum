import { Component, Input } from '@angular/core';
import { Pessoa } from './questao03/pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'provaum';
  @Input() pessoas: Pessoa[] = [
    { idade: 25, nome: 'Erick', tipo: 'Adulto'},
    { idade: 35, nome: 'Jon', tipo: 'Adulto'},
    { idade: 39, nome: 'Daenerys', tipo: 'Adulto'},
  ];
  adicionarPessoa(pessoa: Pessoa) {
    console.log(pessoa);
    this.pessoas.push(pessoa);
  }
}
