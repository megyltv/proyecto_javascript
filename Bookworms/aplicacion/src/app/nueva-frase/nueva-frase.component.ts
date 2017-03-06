import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http, Response} from "@angular/http";
import {MasterUrlService} from "../services/master-url.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-nueva-frase',
  templateUrl: './nueva-frase.component.html',
  styleUrls: ['./nueva-frase.component.css']
})
export class NuevaFraseComponent implements OnInit {
  title="Nueva Frase";
  subtitle="Actualizar Frase";
  description="";
  nuevaFrase = {};
  private _parametros:any;
  frases:any;

  disabledButtons = {
    NuevaFraseFormSubmitButton: false
  };

  constructor(private _ActivateRoute:ActivatedRoute, private _http:Http, private _masterUrl: MasterUrlService) { }

  ngOnInit() {
    this._ActivateRoute.params.subscribe(parametros=>{
      this._parametros=parametros;
      console.log(parametros);
    })
    this.frases.formularioCerrado=!this.frases.formularioCerrado;
  }

  crearFrase(formulario:NgForm){
    this.disabledButtons.NuevaFraseFormSubmitButton = true;
    let frase = {
      fraseDescripcion: formulario.value.fraseDescripcion,
      autor:formulario.value.autor,
      idLibro:this._parametros.idLibro
    };

    this._http.post(this._masterUrl.url + "Frases", frase)
      .subscribe(
        (res)=>{
          this.frases.push(res.json());
          this.nuevaFrase = {};
          this.disabledButtons.NuevaFraseFormSubmitButton = false;
        },
        (err)=>{
          console.log("Ocurrio un error", err);
        }
      );
  }

  actualizarFrase(frase:any,formulario:NgForm){
    let parametros={
      fraseDescripcion: frase.fraseDescripcion,
      autor:frase.autor
    };
    this._http.put(this._masterUrl.url+"Frases/"+frase.id,parametros).subscribe(
      (res:Response)=>{
        frase.formularioCerrado=!frase.formularioCerrado;
        console.log("Respuesta: ",res.json());
      },
      (err)=>{
        console.log("Error: ",err);
      }
    );
  }


}
