import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaApiService } from '../consulta-api.service';
import { SeleccionaTemaService } from '../selecciona-tema.service';

@Component({
  selector: 'app-comic-detalles',
  templateUrl: './comic-detalles.component.html',
  styleUrls: ['./comic-detalles.component.css']
})

export class ComicDetallesComponent implements OnInit {

idComic:any;
idSerie:any;
Comic: any;
estado:any;

  constructor(private route: ActivatedRoute, private servicioDatos: ConsultaApiService, private servicioTema: SeleccionaTemaService) { 

  
  }

  ngOnInit() {
      this.route.params.subscribe(params => {
                this.idComic = params['id']; 
});
    this.servicioDatos.obtenerComic(this.idComic);
    this.servicioDatos.lista4().subscribe(
        data => {
            this.Comic = data.data.results[0];
    console.log(this.Comic);
            this.idSerie = this.Comic.series.resourceURI.split("/")[6]
        },
      );
  }
}

