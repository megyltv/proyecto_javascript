import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {MasterUrlService} from "../services/master-url.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-listar-libros-admin',
  templateUrl: './listar-libros-admin.component.html',
  styleUrls: ['./listar-libros-admin.component.css']
})
export class ListarLibrosAdminComponent implements OnInit {
  title: string = "Bookworm's Review";
  subtitle: string="Lista de Libros";
  description:string="A continuación se listan los libros ingresados en el sistema";
  libros = [];

  disabledButtons = {
    NuevoLibroFormSubmitButton: false
  };

  constructor(private _http:Http,private _masterUrl:MasterUrlService) {
  }

  ngOnInit() {
    this._http.get(this._masterUrl.url + "Libro")
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

  borrarLibro(id:number){
    this._http.delete(this._masterUrl.url+"Libro/"+id).subscribe(
      (res)=>{
        let libroBorrado=res.json();
        this.libros=this.libros.filter(value=>libroBorrado.id!=value.id);
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  actualizarLibro(libro:any,formulario:NgForm){
    let parametros={
      nombreLibro: libro.nombreLibro,
      //imagenLibro:libro.imagenLibro,
      autorLibro: libro.autorLibro,
      numeroPaginas: libro.numeroPaginas,
      fechaCreacion: libro.fechaCreacion,
      categoriaLibro: libro.categoriaLibro
    };
    this._http.put(this._masterUrl.url+"Libro/"+libro.id,parametros).subscribe(
      (res:Response)=>{
        libro.formularioCerrado=!libro.formularioCerrado;
        console.log("Respuesta: ",res.json());
      },
      (err)=>{
        console.log("Error: ",err);
      }
    );
  }

}
