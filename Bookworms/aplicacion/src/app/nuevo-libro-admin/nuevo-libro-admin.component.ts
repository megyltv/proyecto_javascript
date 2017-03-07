import { Component, OnInit } from '@angular/core';
import {MasterUrlService} from "../services/master-url.service";
import {Response, Http} from "@angular/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-nuevo-libro-admin',
  templateUrl: './nuevo-libro-admin.component.html',
  styleUrls: ['./nuevo-libro-admin.component.css']
})
export class NuevoLibroAdminComponent implements OnInit {

  title: string = "Bookworm's Review";
  subtitle: string="Crear Libros";
  nuevoLibro = {};
  libros = [];
  categoriaLibros=["Biografia","Clasica","Aventuras","Ciencia Ficcion / Fantasia","Romantica","Misterio / Suspenso"];

  disabledButtons = {
    NuevoLibroFormSubmitButton: false
  };

  constructor(private _http: Http,
              private _masterUrl: MasterUrlService) { }

  ngOnInit() {

  }

  crearLibro(formulario:NgForm){
    this.disabledButtons.NuevoLibroFormSubmitButton = true;
    let libro = {
      nombreLibro: formulario.value.nombreLibro,
      imagenLibro:formulario.value.imagenLibro,
      autorLibro: formulario.value.autorLibro,
      numeroPaginas: formulario.value.numeroPaginas,
      fechaCreacion: new Date(),
      categoriaLibro: formulario.value.categoriaLibro,
      sinopsisLibro: formulario.value.sinopsisLibro
    };

    this._http.post(this._masterUrl.url + "Libro", libro)
      .subscribe(
        (res)=>{
          this.libros.push(res.json());
          this.nuevoLibro = {};
          this.disabledButtons.NuevoLibroFormSubmitButton = false;
        },
        (err)=>{
          console.log("Ocurrio un error", err);
        }
      );
  }

}
