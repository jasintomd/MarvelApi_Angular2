import { Component, OnInit } from '@angular/core';
import { ConsultaApiService } from '../consulta-api.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SeleccionaTemaService } from '../selecciona-tema.service';

@Component({
  selector: 'app-cuerpo-series',
  templateUrl: './cuerpo-series.component.html',
  styleUrls: ['./cuerpo-series.component.css']
  
})
export class CuerpoSeriesComponent implements OnInit {
listaSeries: any;
id: any;
constructor( 
    private route: ActivatedRoute,
    private servicioDatos: ConsultaApiService, 
    private servicioTema: SeleccionaTemaService
    ) {
        this.listaSeries =[];
        this.id = route.snapshot.params["id"];
    
    }


 ngOnInit() { 
     this.servicioDatos.obtenerSeries();
    this.servicioDatos.lista2().subscribe(
    data => {
    this.listaSeries=data;
    },
);
  }

}
