import { Component } from '@angular/core'

// Adding decorator encaminha metadata
@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html'
})
export class TopoComponent {
    public titulo: string = "Aprendendo Inglês"
}
