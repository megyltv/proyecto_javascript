import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ModuleWithProviders} from "@angular/core";
import {ListarEntradasComponent} from "./listar-entradas/listar-entradas.component";
import {NuevoLibroAdminComponent} from "./nuevo-libro-admin/nuevo-libro-admin.component";
import {ListarLibrosAdminComponent} from "./listar-libros-admin/listar-libros-admin.component";
import {ListarFrasesComponent} from "./listar-frases/listar-frases.component";
import {NuevaEntradaComponent} from "./nueva-entrada/nueva-entrada.component";
import {NuevaFraseComponent} from "./nueva-frase/nueva-frase.component";

export const routes: Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'administrador', component:ListarLibrosAdminComponent},
  {path:'administrador/crearLibro', component:NuevoLibroAdminComponent},
  {path:'libro/:idLibro/entradas', component:ListarEntradasComponent},
  {path:'libro/:idLibro/frases', component:ListarFrasesComponent},
  {path:'libro/:idLibro/entradas/crearEntrada',component:NuevaEntradaComponent},
  {path:'libro/:idLibro/frases/crearFrase',component:NuevaFraseComponent},
];
export const routing:ModuleWithProviders=RouterModule.forRoot(routes);
