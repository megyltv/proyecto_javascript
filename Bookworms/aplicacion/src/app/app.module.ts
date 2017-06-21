import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NuevoLibroAdminComponent } from './nuevo-libro-admin/nuevo-libro-admin.component';
import { ListarLibrosAdminComponent } from './listar-libros-admin/listar-libros-admin.component';
import { HomeComponent } from './home/home.component';
import { ListarEntradasComponent } from './listar-entradas/listar-entradas.component';
import { NuevaEntradaComponent } from './nueva-entrada/nueva-entrada.component';
import { NuevaFraseComponent } from './nueva-frase/nueva-frase.component';
import { ListarFrasesComponent } from './listar-frases/listar-frases.component';
import {MasterUrlService} from "./services/master-url.service";
import {routing} from "./app.routes";
import { ListarEntradasAdminComponent } from './listar-entradas-admin/listar-entradas-admin.component';
import { ComprarComponent } from './comprar/comprar.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoLibroAdminComponent,
    ListarLibrosAdminComponent,
    HomeComponent,
    ListarEntradasComponent,
    NuevaEntradaComponent,
    NuevaFraseComponent,
    ListarFrasesComponent,
    ListarEntradasAdminComponent,
    ComprarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    MasterUrlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
