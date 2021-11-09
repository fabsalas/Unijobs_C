import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-empleo',
  templateUrl: './agregar-empleo.page.html',
  styleUrls: ['./agregar-empleo.page.scss'],
})
export class AgregarEmpleoPage implements OnInit {

  empleo :any =[
    {
      Id_emp: '',
      Id_cat: '',
      Titulo_emp: "",
      Descrip_emp: "",
      Sueldo: "",
      Fec_publi: "",
      Run: "",
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  guardaremp(){

  }
}
