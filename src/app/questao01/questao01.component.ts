import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questao01',
  templateUrl: './questao01.component.html',
  styleUrls: ['./questao01.component.css']
})
export class Questao01Component implements OnInit {
  titulo = 'Questão 01';
  numero = null;
  tipoNumero: string;
  numeroPar: boolean;
  numeroClasse = 'text-primary';

  constructor() {}

  ngOnInit() {
  }
  verificarNumeroPar(value) {
    this.numero = value;
    if (this.numero % 2 === 0) {
      this.tipoNumero = 'par';
      this.numeroPar = true;
      this.numeroClasse = 'text-primary';
    } else {
      this.tipoNumero = 'ímpar';
      this.numeroPar = false;
      this.numeroClasse = 'text-danger';
    }
  }
}
