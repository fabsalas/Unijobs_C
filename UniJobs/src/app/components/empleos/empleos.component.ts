import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';





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


   empleo: any =[
    {
    id : '',
    titulo: '',
    texto: ''
  }
   ]
  /*{
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
*/
  constructor(private servicioBD: DbService,private router:Router) { }
  getItem($event){
    const valor = $event.target.value;
    console.log(valor);
  }

  /*empleos :any =[
    {
      Id_emp: 1,
      Id_cat: 1,
      Titulo_emp: "Paseo Mascota",
      Descrip_emp: "Mascotas",
      Sueldo: 100000,
      Fec_publi: "08-11-2021",
      Run: 123456782,
    }
  ]*/


  
  ngOnInit() {
        //this.servicioBD.presentAlert("1");
        this.servicioBD.dbState().subscribe((res) =>{
          //this.servicioBD.presentAlert("2");
          if(res){
            //this.servicioBD.presentAlert("3");
            this.servicioBD.fetchEmpleos().subscribe(item =>{
              this.empleo = item;
            })
          }
          //this.servicioBD.presentAlert("4");
        });
      }
    
      
  }


