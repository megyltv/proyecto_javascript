import {Component, OnInit} from '@angular/core';
import {MasterUrlService} from "../services/master-url.service";
import {Http, Response} from "@angular/http";
import {ActivatedRoute} from "@angular/router";
import {setInterval} from "timers";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = "Últimas Novedades";
  subtitle: string = "Algo que te apasiona, para todos los gustos!";
  libros = [];
  librosCarrusel = [];
  indiceActual: number = 0;

  constructor(private _http: Http, private _masterUrl: MasterUrlService) {
  }

  ngOnInit() {
    this._http.get(this._masterUrl.url + "libro")
      .subscribe(
        (res: Response) => {
          this.libros = res.json().map((value) => {
            value.formularioCerrado = true;
            return value;
          });
          this.librosCarrusel = this.libros;
          setInterval(() => {
            console.log(this.librosCarrusel.length);
            console.log(this.indiceActual);

            if (this.indiceActual + 1 >= this.librosCarrusel.length) {
              this.indiceActual = 0;
            } else {
              this.indiceActual = this.indiceActual + 1;
            }
          }, 2000);
        },
        (err) => {
          console.log(err);
        }
      )
  }

  listarPorCategoria(categoria: string) {
    this._http.get(this._masterUrl.url + "Libro?categoriaLibro=" + categoria)
      .subscribe(
        (res: Response) => {
          this.libros = res.json().map((value) => {
            value.formularioCerrado = true;
            return value;
          });
        },
        (err) => {
          console.log(err);
        }
      )

  }

  cambiarOrden() {
    this._http.get(this._masterUrl.url + "Libro")
      .subscribe(
        (res: Response) => {
          this.libros = res.json().map((value) => {
            value.formularioCerrado = true;
            return value;
          });
          this.libros=this.libros.reverse();
        },
        (err) => {
          console.log(err);
        }
      )

  }

}


