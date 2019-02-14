import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
  public coracaoVazio = '/src/assets/img/coracao_vazio.png';
  public coracaoCheio = '/src/assets/img/coracao_cheio.png';
  public coracoes: Array<Coracao> = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];

  @Input()
  public tentativas: number;

  constructor() {}

  ngOnChanges() {
    if (this.tentativas !== this.coracoes.length) {
      const indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].cheio = false;
    }
    console.log('Tentativas :' + this.tentativas);
  }

  ngOnInit() {}
}
