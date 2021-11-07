import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-empleo',
  templateUrl: './agregar-empleo.page.html',
  styleUrls: ['./agregar-empleo.page.scss'],
})
export class AgregarEmpleoPage implements OnInit {

  empleo :any =[
    {
      Id: '',
      Titulo: "",
      Texto: ""
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  guardar(){

  }
}
