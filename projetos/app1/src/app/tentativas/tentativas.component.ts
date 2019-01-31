import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number = 0

  public coracoes: Coracao[] = [
      new Coracao(true),
      new Coracao(true),
      new Coracao(true)
  ]

  constructor() {
      console.log(this.coracoes)
  }

  ngOnChanges() {
      console.log("tentaativas", this.tentativas, this.coracoes.length)
      if (this.tentativas !== this.coracoes.length) {
          let indice = this.coracoes.length - 1 - this.tentativas
          console.log("Indice", indice)
          if(indice > -1)
            this.coracoes[indice].cheio=false
      }

  }

  ngOnInit() {
  }


}
