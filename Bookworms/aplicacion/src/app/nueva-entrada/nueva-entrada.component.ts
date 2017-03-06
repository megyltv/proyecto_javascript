import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {MasterUrlService} from "../services/master-url.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-nueva-entrada',
  templateUrl: './nueva-entrada.component.html',
  styleUrls: ['./nueva-entrada.component.css']
})
export class NuevaEntradaComponent implements OnInit {

  title="Nueva Resenia";
  subtitle="Actualizar Resenia";
  description="";
  nuevaResenia = {};
  private _parametros:any;
  resenias:any;

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
    });
    //this.resenias.formularioCerrado=true;
  }

  crearResenia(formulario){
    this.disabledButtons.NuevaReseniaFormSubmitButton = true;
    let resenia = {
      resenia: formulario.value.resenia,
      calificacion: formulario.value.calificacion,
      idLibro: this._parametros.idLibro
    };

    this._http.post(this._masterUrl.url + "Resenia", resenia)
      .subscribe(
        (res)=>{
          this.resenias.push(res.json());
          this.nuevaResenia = {};
          this.disabledButtons.NuevaReseniaFormSubmitButton = false;
        },
        (err)=>{
          console.log("Ocurrio un error", err);
        }
      );
  }


}
