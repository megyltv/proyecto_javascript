import { Component, OnInit } from '@angular/core';
import {MasterUrlService} from "../services/master-url.service";
import {Response, Http} from "@angular/http";

@Component({
  selector: 'app-nuevo-libro-admin',
  templateUrl: './nuevo-libro-admin.component.html',
  styleUrls: ['./nuevo-libro-admin.component.css']
})
export class NuevoLibroAdminComponent implements OnInit {

  title: string = "Bookworm's Review";
  nuevoLibro = {};
  libros = [];

  disabledButtons = {
    NuevoLibroFormSubmitButton: false
  };

  constructor(private _http: Http,
              private _masterUrl: MasterUrlService) { }

  ngOnInit() {
    this._http.get(this._masterUrl.url + "administrador/crearLibro")
      .subscribe(
        (res: Response) => {
          this.libros = res.json()
            .map((value) => {
              value.formularioCerrado = true;
              return value;
            });
        },
        (err) => {
          console.log(err);
        }
      )
  }

  crearLibro(formulario){
    this.disabledButtons.NuevoLibroFormSubmitButton = true;
    let libro = {
      nombreLibro: formulario.value.nombreLibro,
      autorLibro: formulario.value.autorLibro,
      numeroPaginas: formulario.value.numeroPaginas,
      categoriaLibro: formulario.value.categoriaLibro
    }

    this._http.post(this._masterUrl.url + "administrador/crearLibro", libro)
      .suscribe(
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
