import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaApiService } from '../consulta-api.service';
import { SeleccionaTemaService } from '../selecciona-tema.service';

@Component({
  selector: 'app-personaje-detalles',
  templateUrl: './personaje-detalles.component.html',
  styleUrls: ['./personaje-detalles.component.css']

})

export class PersonajeDetallesComponent implements OnInit {

idPersonaje:any;

personaje: any;
    

  constructor(private route: ActivatedRoute, private servicioDatos: ConsultaApiService, private servicioTema: SeleccionaTemaService) { 
      
  
  }

  ngOnInit() {
      this.route.params.subscribe(params => {
                this.idPersonaje = params['id']; 
});
    this.servicioDatos.obtenerPersonaje(this.idPersonaje);
    this.servicioDatos.lista6().subscribe(
        data => {
            this.personaje=data.data.results[0]; 

            
        },
      );
  }

}
