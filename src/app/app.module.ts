import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import {Md5} from 'ts-md5/dist/md5';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { ConsultaApiService } from './consulta-api.service';
import { SeleccionaTemaService } from './selecciona-tema.service';
import { CuerpoPersonajesComponent } from './cuerpo-personajes/cuerpo-personajes.component';
import { HomeComponent } from './home/home.component';

import { CuerpoSeriesComponent } from './cuerpo-series/cuerpo-series.component';
import { SeriesCompletasComponent } from './series-completas/series-completas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComicDetallesComponent } from './comic-detalles/comic-detalles.component';
import { PersonajeDetallesComponent } from './personaje-detalles/personaje-detalles.component';
import { LoadingComponent } from './loading/loading.component';
import { FiltroNombrePipe } from './filtro-nombre.pipe';
import { FiltroPersonajesPipe } from './filtro-personajes.pipe';
import { BusquedaComponent } from './busqueda/busqueda.component';

const ruta: Routes = [
    { path: "", component: HomeComponent},
    { path: "Comics", component: CuerpoComponent},
    { path: "Personajes", component: CuerpoPersonajesComponent},
    { path: "Series", component: CuerpoSeriesComponent},
    { path: "Series/:id", component: SeriesCompletasComponent },
    { path: "Comics/:id", component: ComicDetallesComponent },
    { path: "Personajes/:id", component: PersonajeDetallesComponent },
    { path: "Busqueda", component: BusquedaComponent },
    { path: '**', component: PageNotFoundComponent }
];
export const router = RouterModule.forRoot(ruta);



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CuerpoComponent,
    CuerpoPersonajesComponent,
    HomeComponent,
    CuerpoSeriesComponent,
    SeriesCompletasComponent,
    PageNotFoundComponent,
    ComicDetallesComponent,
    PersonajeDetallesComponent,
    LoadingComponent,
    FiltroNombrePipe,
    FiltroPersonajesPipe,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router
  ],
  providers: [ConsultaApiService, SeleccionaTemaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
