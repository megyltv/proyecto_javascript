import { Component, OnInit } from '@angular/core';
import {MasterUrlService} from "../services/master-url.service";
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = "Novedades";
  subtitle: string="Algo que te apasiona, para todos los gustos!";
  libros = [];
  librosCarrusel=[];
  //public index = [];


  constructor(private _http:Http,private _masterUrl:MasterUrlService) { }

  ngOnInit() {
    this._http.get(this._masterUrl.url + "libro")
      .subscribe(
        (res: Response) => {
          this.libros = res.json().map((value) => {
            value.formularioCerrado=true;
            return value;
          });
          console.log(this.libros);
          // this.index = this.libros.indexOf(res);
          // console.log(this.index);
          this.librosCarrusel=this.libros;
        },
        (err) => {
          console.log(err);
        }
      )
  }
  listarLibros() {
    this._http.get(this._masterUrl.url + "libro")
      .subscribe(
        (res: Response) => {
          this.libros = res.json().map((value) => {
            value.formularioCerrado=true;
            return value;
          });
        },
        (err) => {
          console.log(err);
        }
      )
  }

}
