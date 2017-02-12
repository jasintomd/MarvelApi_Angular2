import { Component, OnInit } from '@angular/core';
import { ConsultaApiService } from '../consulta-api.service';
import { ActivatedRoute } from '@angular/router';
import { SeleccionaTemaService } from '../selecciona-tema.service';
import { FiltroNombrePipe } from '../filtro-nombre.pipe';



@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']

})
export class CuerpoComponent implements OnInit {
url: any;
listaComics: any;

constructor(private route: ActivatedRoute, private servicioDatos: ConsultaApiService, private servicioTema: SeleccionaTemaService) { }

  ngOnInit() {
    this.servicioDatos.obtenerComics();
        this.servicioDatos.lista1().subscribe(
            data => { 
            this.listaComics = data;
            },
        );
    
     
  }
}
