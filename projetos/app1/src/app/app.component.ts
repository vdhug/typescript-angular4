import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';

  public jogoEmAndamento: boolean = true
  public resultado: string

  public encerrarJogo(tipo: string): void {
      this.resultado = tipo
      this.jogoEmAndamento = false
      console.log("resultado", this.resultado)
  }

  public reiniciarJogo(): void {
      this.jogoEmAndamento = true
      this.resultado = undefined
  }


}
