import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http, Response} from "@angular/http";
import {MasterUrlService} from "../services/master-url.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-listar-entradas',
  templateUrl: './listar-entradas.component.html',
  styleUrls: ['./listar-entradas.component.css']
})
export class ListarEntradasComponent implements OnInit {
  title="Resenias";
  subtitle="Comentarios";
  description="A continuacion se listan las resenias ingresadas para el libro";
  description2="Dejanos tu comentario";
  private _parametros:any;
  resenias=[];

  nuevoComentario = {};
  comentarios:any;
  libro= [];

  disabledButtons = {
    NuevoComentarioFormSubmitButton: false
  };

  constructor(private _ActivateRoute:ActivatedRoute, private _http:Http, private _masterUrl:MasterUrlService) { }

  ngOnInit() {
    this._ActivateRoute.params.subscribe(parametros => {
      this._parametros = parametros;
      this._http.get(this._masterUrl.url + 'Resenia?idLibro=' + this._parametros.idLibro).subscribe(
        (res: Response) => {
          this.resenias = res.json().map((value) => {
            value.formularioCerrado = true;
            return value;
          });
        },
        (err) => {
          console.log(err);
        }
      );
      this._http.get(this._masterUrl.url + 'Comentario?idLibro=' + this._parametros.idLibro).subscribe(
        (res: Response) => {
          this.comentarios = res.json().map((value) => {
            value.formularioCerrado = true;
            return value;
          });
        },
        (err) => {
          console.log(err);
        }
      );
        this._http.get(this._masterUrl.url + 'Libro/' + this._parametros.idLibro).subscribe(
          (res) => {
            this.libro = res.json();
            console.log(this.libro);
          },
          (err) => {
            console.log(err);
          });
    })
  }

  crearComentario(formulario:NgForm){
    this.disabledButtons.NuevoComentarioFormSubmitButton = true;
    let comentario = {
      nombreComentario: formulario.value.nombreComentario,
      comentario:formulario.value.comentario,
      idLibro:this._parametros.idLibro
    };

    this._http.post(this._masterUrl.url + "Comentario", comentario)
      .subscribe(
        (res)=>{
          this.comentarios.push(res.json());
          this.nuevoComentario = {};
          this.disabledButtons.NuevoComentarioFormSubmitButton = false;
        },
        (err)=>{
          console.log("Ocurrio un error", err);
        }
      );

  }

}
