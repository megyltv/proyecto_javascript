import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {MasterUrlService} from "../services/master-url.service";
import {ActivatedRoute} from "@angular/router";
import {isNumber} from "util";

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  nuevaCompra={};
  title:string ="Realizar compra de Libro";
  subtitle1:string ="Detalles de la Compra";
  subtitle2:string ="Detalles de la Tarjeta";
  private _parametros:any;
  libro= [];
  precioFinal:number;

  disabledButtons = {
    NuevaCompraFormSubmitButton: false
  };

  constructor(private _ActivateRoute:ActivatedRoute, private _http: Http, private _masterURL: MasterUrlService) { }

  ngOnInit() {
    this._ActivateRoute.params.subscribe(parametros => {
      this._parametros = parametros;
      this._http.get(this._masterURL.url + 'Libro?id=' + this._parametros.idLibro).subscribe(
        (res: Response) => {
          this.libro=res.json();
          console.log(this.libro);
        },
        (err) => {
          console.log(err);
        }
      );
    })
  }

  realizarCompra(nuevaCompra){
    this.disabledButtons.NuevaCompraFormSubmitButton = true;
    // this.precioFinal = this._parametros.precioLibro*nuevaCompra.cantidad()
    // console.log(this.precioFinal)
    let compra = {
      idLibro:this._parametros.idLibro,
      nombreTitular:nuevaCompra.nombreTitular,
      tipoTarjeta:nuevaCompra.tipoTarjeta,
      numeroTarjeta:nuevaCompra.numeroTarjeta,
      codigoDiv:nuevaCompra.codigoDiv,
      fechaCaducidad:nuevaCompra.fechaCaducidad,
      // cantidad:nuevaCompra.cantidad,
      // precioFinal: this.precioFinal

    };
    this._http.post(this._masterURL.url + "compra", compra)
      .subscribe(
        (res)=>{
          console.log(res);
          this.nuevaCompra = {};
          this.disabledButtons.NuevaCompraFormSubmitButton = false;
        },
        (err)=>{
          console.log("Ocurrio un error", err);
        }
      );
  }
}
