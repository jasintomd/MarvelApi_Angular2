import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaApiService } from '../consulta-api.service';
import { SeleccionaTemaService } from '../selecciona-tema.service';
import { FiltroNombrePipe } from '../filtro-nombre.pipe';

@Component({
  selector: 'app-cuerpo-personajes',
  templateUrl: './cuerpo-personajes.component.html',
  styleUrls: ['./cuerpo-personajes.component.css']

})
export class CuerpoPersonajesComponent implements OnInit {
url: any;
listaPersonajes: any;

constructor(private route: ActivatedRoute, private servicioDatos: ConsultaApiService, private servicioTema: SeleccionaTemaService) {
  } 

  ngOnInit() {
        this.servicioDatos.obtenerPersonajes();
        this.servicioDatos.lista3().subscribe(
        data => {
        this.listaPersonajes = data; 
                
            },
        );
  }

}
