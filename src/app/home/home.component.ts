import { Component, OnInit } from '@angular/core';
import { ConsultaApiService } from '../consulta-api.service';
import { ActivatedRoute } from '@angular/router';
import { SeleccionaTemaService } from '../selecciona-tema.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private servicioDatos: ConsultaApiService, private servicioTema: SeleccionaTemaService) { }

  ngOnInit() {
  }

}
