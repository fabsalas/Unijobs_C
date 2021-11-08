import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-empleos',
  templateUrl: './empleos.component.html',
  styleUrls: ['./empleos.component.scss'],
})
export class EmpleosComponent implements OnInit {
  public ocultar1: boolean = false;
  public ocultar2: boolean = true;
 
  accion1(){
  this.ocultar1 = !this.ocultar1;
  this.ocultar2 = !this.ocultar2;
  }

  private empleo =[
    {
    id : '1',
    title: 'Paseo de mascota',
    name: 'Juan',
    imageURL:'../../assets/img/paseomascota.png',
    comment:'Necesito dar un paseo a mi perro, pero no cuento con tiempo'
  },
  {
    id : '2',
    title: 'Manicure',
    name: 'Francisco',
    imageURL:'../../assets/img/manicure.jpg',
    comment:'Necesito dar un paseo a mi perro, pero no cuento con tiempo'
  },
  {
    id : '3',
    title: 'DJ',
    name: 'Francisco',
    imageURL:'../../assets/img/job3.jpg',
    comment:'Necesito dar un paseo a mi perro, pero no cuento con tiempo'
  }
]
  constructor() { }
  getItem($event){
    const valor = $event.target.value;
    console.log(valor);
  }
  ngOnInit() {}

}
