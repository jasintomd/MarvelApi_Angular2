import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
// Md5 es un sistema de encriptación, necesario para crear el hash con la marca temporal, mi key publica y mi key privada
import { Md5 } from 'ts-md5/dist/md5';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';


@Injectable()
export class ConsultaApiService {
private listaComics: Subject<any> = new Subject<any>();
private respuestas: Subject<any> = new Subject<any>();
private listaPersonajes: Subject<any> = new Subject<any>();
liPersonajes:any;
private listaSeries: Subject<any> = new Subject<any>();
liSeries:any;
private serie: Subject<any> = new Subject<any>();
private Comic: Subject<any> = new Subject<any>();
private listaSerieCompleta: Subject<any> = new Subject<any>();
private personaje: Subject<any> = new Subject<any>();
keyPublica: string;
keyPrivada: string;
fecha: any;
ts: any;
hash: any;
md5: any;
url: string;
    
constructor(private ajax: Http) { 
    this.keyPrivada = "b6ec742f0bad1002360e2655e9bac0c8b27f0a05";
    this.keyPublica = "28fcabe24009d299f431fe5d26a08c85";
    this.fecha = new Date ();
    this.ts = "";

    
}
    
    
obtenerComics(){
    this.obtenerHash();
    this.url = "http://gateway.marvel.com/v1/public/comics?limit=100&format=comic&formatType=comic&ts="+this.ts+"&hash="+this.hash+"&apikey="+this.keyPublica;
        return this.ajax.get(this.url).map(response => response.json()).subscribe( data => this.listaComics.next(data));
}
    
obtenerSeries(){
    this.obtenerHash();
    this.url = "http://gateway.marvel.com/v1/public/series?limit=100&ts="+this.ts+"&hash="+this.hash+"&apikey="+this.keyPublica;
        return this.ajax.get(this.url).map(response => response.json())
.subscribe( data => this.listaSeries.next(data));
    
}
    
obtenerPersonajes(){
    this.obtenerHash();
    this.url = "http://gateway.marvel.com/v1/public/characters?limit=100&ts="+this.ts+"&hash="+this.hash+"&apikey="+this.keyPublica;
        return this.ajax.get(this.url).map(response => response.json()).subscribe( data => this.listaPersonajes.next(data));
}
obtenerComic(id){
    this.obtenerHash();
    this.url = "http://gateway.marvel.com/v1/public/comics/"+id+"?&ts="+this.ts+"&hash="+this.hash+"&apikey="+this.keyPublica;
    return this.ajax.get(this.url).map(response => response.json())
.subscribe( data => this.Comic.next(data));
}
obtenerComicsSerie(id){
    this.obtenerHash();
    this.url = "http://gateway.marvel.com/v1/public/series/"+id+"/comics?limit=100&format=comic&formatType=comic&orderBy=issueNumber&ts="+this.ts+"&hash="+this.hash+"&apikey="+this.keyPublica;
    return this.ajax.get(this.url).map(response => response.json())
.subscribe( data => this.listaSerieCompleta.next(data));
}
    
obtenerSerie(id){
    this.obtenerHash();
    this.url = "http://gateway.marvel.com/v1/public/series/"+id+"?&ts="+this.ts+"&hash="+this.hash+"&apikey="+this.keyPublica;
        return this.ajax.get(this.url).map(response => response.json())
.subscribe( data => this.serie.next(data));
    
}    
    
obtenerPersonaje(id){
    this.obtenerHash();
    this.url = "http://gateway.marvel.com/v1/public/characters/"+id+"?&ts="+this.ts+"&hash="+this.hash+"&apikey="+this.keyPublica;
    return this.ajax.get(this.url).map(response => response.json())
.subscribe( data => this.personaje.next(data));
}
 
busquedaDatos(tipo, empiezaPor){
    this.obtenerHash();
    this.url = "http://gateway.marvel.com/v1/public/"+tipo+"?&titleStartsWith="+empiezaPor+"&ts="+this.ts+"&hash="+this.hash+"&apikey="+this.keyPublica;
    return this.ajax.get(this.url).map(response => response.json())
.subscribe( data => this.respuestas.next(data));    
}
    
lista1(): Observable <any>{
    return this.listaComics.asObservable();
}
    
lista2(): Observable <any>{
    return this.listaSeries.asObservable();
}
lista3(): Observable <any>{
    return this.listaPersonajes.asObservable();
}
    
lista4(): Observable <any>{
    return this.Comic.asObservable();
}
lista5(): Observable <any>{
    return this.serie.asObservable();
}

lista6(): Observable <any>{
    return this.personaje.asObservable();
}
lista7(): Observable <any>{
    return this.listaSerieCompleta.asObservable();
}
lista8(): Observable <any>{
    return this.respuestas.asObservable();
}
    
obtenerHash(){
    this.ts = this.fecha.valueOf();
    this.hash = Md5.hashStr(this.ts+this.keyPrivada+this.keyPublica);
    
}

}