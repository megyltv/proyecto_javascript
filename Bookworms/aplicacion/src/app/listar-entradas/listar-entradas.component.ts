import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http, Response} from "@angular/http";
import {MasterUrlService} from "../services/master-url.service";

@Component({
  selector: 'app-listar-entradas',
  templateUrl: './listar-entradas.component.html',
  styleUrls: ['./listar-entradas.component.css']
})
export class ListarEntradasComponent implements OnInit {

  title="Frases";
  description="A continuacion se listan las frases ingresadas para el libro";
  private _parametros:any;
  resenias=[];

  constructor(private _ActivateRoute:ActivatedRoute, private _http:Http, private _masterURL:MasterUrlService) { }

  ngOnInit() {
    this._ActivateRoute.params.subscribe(parametros=>{
      this._parametros=parametros;
      console.log(parametros);
      this._http.get(this._masterURL.url+'Resenias?idLibro='+this._parametros.idLibro).subscribe(
        (res:Response)=>{
          this.resenias=res.json().map((value)=>{
            value.formularioCerrado=true;
            return value;
          });
        },
        (err)=>{
          console.log(err);
        }
      )
    })

  }


}
