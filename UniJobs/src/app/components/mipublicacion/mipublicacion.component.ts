import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mipublicacion',
  templateUrl: './mipublicacion.component.html',
  styleUrls: ['./mipublicacion.component.scss'],
})
export class MipublicacionComponent implements OnInit {

   empleo :any = [
    {
      id_emp: 1,
      status:'publicado hace 2 min.',
      imageURL:'../../assets/img/paseomascota.png',
      title: 'Paseo de mascota.',
      nombre_usu: 'Jhon snow',
      comentario: 'necesito pasear a mi lobo.'
    },
    {
      id_emp: 2,
      status:'publicado hace menos de una semana.',
      imageURL:'../../assets/img/manicure.jpg',
      title: 'manicure.',
      nombre_usu: 'Betty snow.',
      comentario: 'necesito una manicure urgente.'
    },
  ]

  
  constructor() { }


  ngOnInit() {}

}
