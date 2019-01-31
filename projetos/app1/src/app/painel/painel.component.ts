import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = "Traduza a frase abaixo"
  public resposta: string = ""

  public rodada: number = 0
  public tentativas: number = 3
  public rodadaFrase: Frase
  public progresso: string = '0'

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
      this.atualizaRodada()
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
      this.resposta = (<HTMLInputElement>resposta.target).value

  }

  public verificarResposta(): void {

      if(this.resposta === this.rodadaFrase.frasePt){
          this.rodada++;
          this.progresso = parseInt((this.rodada*100)/ this.frases.length)+""
          if(this.rodada < this.frases.length) {
              this.atualizaRodada()
          }
          else {
              this.encerrarJogo.emit("vitoria")
          }
      }
      else {
          this.tentativas--

          if (this.tentativas < 0)
              this.encerrarJogo.emit("derrota")
      }
  }

  public atualizaRodada(): void {
      this.rodadaFrase = this.frases[this.rodada]
      this.resposta = ""
  }

}
