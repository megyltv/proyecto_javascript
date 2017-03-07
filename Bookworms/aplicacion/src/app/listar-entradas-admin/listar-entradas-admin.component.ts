import { Component, OnInit } from '@angular/core';
import {Response, Http} from "@angular/http";
import {ActivatedRoute} from "@angular/router";
import {MasterUrlService} from "../services/master-url.service";

@Component({
  selector: 'app-listar-entradas-admin',
  templateUrl: './listar-entradas-admin.component.html',
  styleUrls: ['./listar-entradas-admin.component.css']
})
export class ListarEntradasAdminComponent implements OnInit {

  title="Reseñas";
  private _parametros:any;
  resenias=[];

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
    });
  }

  borrarResenia(id:number){
    this._http.delete(this._masterUrl.url+"resenia/"+id).subscribe(
      (res)=>{
        let reseniaBorrado=res.json();
        this.resenias=this.resenias.filter(value=>reseniaBorrado.id!=value.id);
      },
      (err)=>{
        console.log(err);
      }
    );
  }
}
