import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http, Response} from "@angular/http";
import {MasterUrlService} from "../services/master-url.service";

@Component({
  selector: 'app-compradores-admin',
  templateUrl: './compradores-admin.component.html',
  styleUrls: ['./compradores-admin.component.css']
})
export class CompradoresAdminComponent implements OnInit {

  title:string ="Lista de Compradores";
  descripcion:string="A continuacion se listan los compradores del libro";
  private _parametros:any;
  compradores= [];

  constructor(private _ActivateRoute:ActivatedRoute, private _http: Http, private _masterURL: MasterUrlService) { }

  ngOnInit() {
    this._ActivateRoute.params.subscribe(parametros => {
      this._parametros = parametros;
      this._http.get(this._masterURL.url + 'Compra?idLibro=' + this._parametros.idLibro).subscribe(
        (res: Response) => {
          this.compradores = res.json().map((value) => {
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

  borrarComprador(id:number){
    this._http.delete(this._masterURL.url+"compra/"+id).subscribe(
      (res)=>{
        let compraBorrada=res.json();
        this.compradores=this.compradores.filter(value=>compraBorrada.id!=value.id);
      },
      (err)=>{
        console.log(err);
      }
    );
  }

}
