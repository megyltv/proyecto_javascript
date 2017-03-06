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

  title: string = "Novedades";
  subtitle: string = "Algo que te apasiona, para todos los gustos!";
  libros = [];
  librosCarrusel = [];
  indiceActual:number = 0;
  private _parametros: any;

  constructor(private _ActivateRoute: ActivatedRoute, private _http: Http, private _masterUrl: MasterUrlService) {
  }

  ngOnInit() {


    this._http.get(this._masterUrl.url + "libro")
      .subscribe(
        (res: Response) => {
          this.librosCarrusel = res.json().map((value) => {
            value.formularioCerrado = true;
            return value;
          });
          setInterval(()=>{
            console.log(this.librosCarrusel.length)
            console.log(this.indiceActual)

            if(this.indiceActual+1>=this.librosCarrusel.length){
              this.indiceActual = 0;
            }else{
              this.indiceActual = this.indiceActual+1;
            }


          },2000);
        },
        (err) => {
          console.log(err);
        }
      );
    this._ActivateRoute.params.subscribe(parametros => {
        this._parametros = parametros;
        console.log(parametros);
        if(this._parametros){
          this._http.get(this._masterUrl.url + "Libro?categoriaLibro=" + this._parametros.nombreCategoria)
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
        else
        {
          this._http.get(this._masterUrl.url + "libro")
            .subscribe(
              (res: Response) => {
                this.libros = res.json().map((value) => {
                  value.formularioCerrado = true;
                  return value;
                });
                this.librosCarrusel = this.libros;
              },
              (err) => {
                console.log(err);
              }
            )
        }
      })
  }

listarLibros()
{
  this._http.get(this._masterUrl.url + "libro")
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

// listarPorCategoria(){
//   this._http.get(this._masterUrl.url + "Libro?categoriaLibro="+this._parametros.nombreCategoria)
//     .subscribe(
//       (res: Response) => {
//         this.libros = res.json().map((value) => {
//           value.formularioCerrado=true;
//           return value;
//         });
//       },
//       (err) => {
//         console.log(err);
//       }
//     )
//
// }

}
