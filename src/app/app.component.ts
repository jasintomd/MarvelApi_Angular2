import { Component } from '@angular/core';
import { SeleccionaTemaService } from './selecciona-tema.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';
constructor(private servicioTema: SeleccionaTemaService ){


}
}
