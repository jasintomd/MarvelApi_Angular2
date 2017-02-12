import { Component, OnInit } from '@angular/core';
import { SeleccionaTemaService } from '../selecciona-tema.service';
import { ConsultaApiService } from '../consulta-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit {
tipoBusqueda:any;
respuesta:any;
cuatroVeces:any;
constructor(private servicioDatos: ConsultaApiService, private servicioTema: SeleccionaTemaService) { 
    this.tipoBusqueda = "comics";
this.cuatroVeces = [0,1,2,3]
  }

  ngOnInit() {

  }
busqueda(event){
        
}  
temaOscuro(event){
   this.servicioTema.cambiaTemaO();
}  
    
temaClaro(event){
    this.servicioTema.cambiaTemaC();
}  
buscaApi(event){
    this.servicioDatos.busquedaDatos(this.tipoBusqueda, this.servicioTema.filtro);
    this.servicioDatos.lista8().subscribe(data => {
            this.respuesta = data.data.results; 
        },
      );
}
vacia(event){
    this.servicioTema.filtro = "";
}
}
