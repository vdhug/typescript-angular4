import { Component, OnInit } from '@angular/core';

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
  public resposta: string

  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0

  constructor() {
      this.rodadaFrase = this.frases[this.rodada]
      console.log(this.rodadaFrase)
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
      this.resposta = (<HTMLInputElement>resposta.target).value

  }

  public verificarResposta(): void {
      if(this.resposta === this.rodadaFrase.frasePt){
          this.rodada++;
          this.progresso = parseInt((this.rodada*100)/ this.frases.length)
          console.log("Acertou", this.progresso)
          if(this.rodada < this.frases.length) {
            this.rodadaFrase = this.frases[this.rodada]

          }
      }
      else {
          console.log("Errou")
      }


  }

}
