import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nueva-frase',
  templateUrl: './nueva-frase.component.html',
  styleUrls: ['./nueva-frase.component.css']
})
export class NuevaFraseComponent implements OnInit {
  subtitle="Nueva Frase";
  nuevaFrase = {};

  disabledButtons = {
    NuevaFraseFormSubmitButton: false
  };

  constructor() { }

  ngOnInit() {
  }

  crearFrase(NuevaFraseForm){

  }

}
