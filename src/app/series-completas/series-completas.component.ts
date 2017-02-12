import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaApiService } from '../consulta-api.service';
import { SeleccionaTemaService } from '../selecciona-tema.service';

@Component({
  selector: 'app-series-completas',
  templateUrl: './series-completas.component.html',
  styleUrls: ['./series-completas.component.css']

})
export class SeriesCompletasComponent implements OnInit {

parametro1:any;
listaSerieCompleta:any;
serie: any;
    

  constructor(private route: ActivatedRoute, private servicioDatos: ConsultaApiService, private servicioTema: SeleccionaTemaService) { 
      
  
  }

  ngOnInit() {
      this.route.params.subscribe(params => {
                this.parametro1 = params['id']; 
});
    this.servicioDatos.obtenerSerie(this.parametro1)
        this.servicioDatos.lista5().subscribe(
        data => {
            this.serie=data.data.results[0];   
        },
      );
    this.servicioDatos.obtenerComicsSerie(this.parametro1);
    this.servicioDatos.lista7().subscribe(
        data => {
            this.listaSerieCompleta=data;      
        },
      );
      
  }
}
