import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})


export class PainelComponent implements OnInit {

  public frases: Frase[]  = FRASES;
  public instrucao = 'Traduza a frase:';
  public resposta = '';
  public rodada = 0;
  public rodadaFrase: Frase;
  public progresso = 0;
  public tentativas = 3;


  constructor() {
    this.atualizarRodada();
  }

  ngOnInit() {
  }

  public atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr === this.resposta) {
        this.rodada++;
      if (this.rodada < 4) {
        this.progresso += 25;

        if (this.rodada === 4) {
          alert('Concluiu as traduções com sucesso !');
        }

        this.atualizarRodada();
      }

    } else {
      this.tentativas--;

      if (this.tentativas === -1) {
        alert('Você perdeu todas as tentativas');
      }
    }
  }

  public atualizarRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }
}
