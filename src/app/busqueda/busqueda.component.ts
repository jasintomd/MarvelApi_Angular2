import { Component, OnInit } from '@angular/core';
import { SeleccionaTemaService } from '../selecciona-tema.service';
import { ConsultaApiService } from '../consulta-api.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
resultados:any;
  constructor(private servicioDatos: ConsultaApiService, private servicioTema: SeleccionaTemaService) { }

  ngOnInit() {
this.servicioDatos.lista8().subscribe(datos => {
    this.resultados = datos.data.results;
    });
  }

}
