import {Component, OnInit} from '@angular/core';
import {MasterUrlService} from "../services/master-url.service";
import {ActivatedRoute} from "@angular/router";
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-listar-frases',
  templateUrl: './listar-frases.component.html',
  styleUrls: ['./listar-frases.component.css']
})
export class ListarFrasesComponent implements OnInit {
  title = "Frases";
  description = "A continuacion se listan las frases ingresadas para el libro";
  private _parametros: any;
  frases = [];
  libro= [];

  constructor(private _ActivateRoute: ActivatedRoute, private _http: Http, private _masterURL: MasterUrlService) {
  }

  ngOnInit() {

    this._ActivateRoute.params.subscribe(parametros => {
      this._parametros = parametros;
      this._http.get(this._masterURL.url + 'Frases?idLibro=' + this._parametros.idLibro).subscribe(
        (res: Response) => {
          this.frases = res.json().map((value) => {
            value.formularioCerrado = true;
            return value;
          });
        },
        (err) => {
          console.log(err);
        }
      );
      this._ActivateRoute.params.subscribe(parametros=>{
          this._parametros=parametros;
          this._http.get(this._masterURL.url+'Libro/'+this._parametros.idLibro).subscribe(
            (res)=>{
              this.libro=res.json();
              console.log(this.libro);
            });
        },
        (err)=>{
          console.log(err);
        });
  })
  }
}
