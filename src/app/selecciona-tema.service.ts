import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';

@Injectable()
export class SeleccionaTemaService {
tema:any;
filtro:string;
  constructor() {
      this.filtro ="";
      this.tema = [true, false];
      
  }
cambiaTemaO(){
    this.tema = [true, false];
}
cambiaTemaC(){
    this.tema = [false, true];
}

}
