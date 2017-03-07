import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http, Response} from "@angular/http";
import {MasterUrlService} from "../services/master-url.service";

@Component({
  selector: 'app-nueva-entrada',
  templateUrl: './nueva-entrada.component.html',
  styleUrls: ['./nueva-entrada.component.css']
})
export class NuevaEntradaComponent implements OnInit {
  title="Nueva Resenia";
  subtitle="Actualizar Resenia";
  nuevaResenia = {};
  private _parametros:any;
  resenias:any;
  libro= [];

  disabledButtons = {
    NuevaReseniaFormSubmitButton: false
  };

  constructor(private _ActivateRoute:ActivatedRoute,
              private _http:Http,
              private _masterUrl: MasterUrlService) { }

  ngOnInit() {
    this._ActivateRoute.params.subscribe(parametros=>{
      this._parametros=parametros;
      console.log(parametros);
      this._http.get(this._masterUrl.url+'Libro/'+this._parametros.idLibro).subscribe(
        (res)=>{
          this.libro=res.json();
          console.log(this.libro);
        },
        (err)=>{
          console.log(err);
        });
    });
  }

  valor(rating:number){
    console.log(rating);
    let json = JSON.stringify(rating);
    this._http.post(this._masterUrl.url + "resenia", json)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      )
  }

  crearResenia(formulario){
    this.disabledButtons.NuevaReseniaFormSubmitButton = true;
    console.log(formulario.value.resenia);
    console.log(formulario.value.rating);
    let resenia = {
      resenia: formulario.value.resenia,
      rating:formulario.value.rating,
      idLibro:this._parametros.idLibro
    };

    console.log(resenia);

    this._http.post(this._masterUrl.url + "resenia", resenia)
      .subscribe(
        (res)=>{
          console.log(res);
          this.resenias.push(res.json());
          this.nuevaResenia = {};
          this.disabledButtons.NuevaReseniaFormSubmitButton = false;
        },
        (err)=>{
          console.log("Ocurrio un error", err);
        }
      );
  }

  actualizarResenia(resenias:any,formulario){
    let parametros={
      resenia: resenias.resenia
    };
    this._http.put(this._masterUrl.url+"resenia/"+resenias.id,parametros).subscribe(
      (res:Response)=>{
        resenias.formularioCerrado=!resenias.formularioCerrado;
        console.log("Respuesta: ",res.json());
      },
      (err)=>{
        console.log("Error: ",err);
      }
    );
  }

}
