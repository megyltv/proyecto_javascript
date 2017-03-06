import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http} from "@angular/http";
import {MasterUrlService} from "../services/master-url.service";

@Component({
  selector: 'app-nueva-entrada',
  templateUrl: './nueva-entrada.component.html',
  styleUrls: ['./nueva-entrada.component.css']
})
export class NuevaEntradaComponent implements OnInit {
  title="Nueva Resenia";
  subtitle="Actualizar Resenia";
  description="";
  nuevaEntrada = {};
  private _parametros:any;
  entradas:any;

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
      entrada: formulario.value.entrada,
      calificacion: formulario.value.calificacion,
      idLibro: this._parametros.idLibro
    };

    this._http.post(this._masterUrl.url + "Entradas", resenia)
      .subscribe(
        (res)=>{
          this.entradas.push(res.json());
          this.nuevaEntrada = {};
          this.disabledButtons.NuevaReseniaFormSubmitButton = false;
        },
        (err)=>{
          console.log("Ocurrio un error", err);
        }
      );
  }

}
