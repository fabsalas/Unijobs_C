import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{
  public ocultar1: boolean = false;
  public ocultar2: boolean = true;
 
  accion1(){
  this.ocultar1 = !this.ocultar1;
  this.ocultar2 = !this.ocultar2;
  }
  /*empleo: any [] = []*/

  empleo: any =[
    {
      id :'',
      titulo:'',
      texto:''
    }
  ]

  constructor(private router:Router, public servicioBD:DbService) {
    /*this.router.navigate(['home/empleos'])*/
  }
  ngOnInit(){
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

  
/**Funcion del segment para manipular la informacion en el home */


  getItem($event){
    const valor = $event.target.value;
    console.log(valor);
  } 



  eliminar(item){
    this.servicioBD.deleteEmpleo(item.id);
    this.servicioBD.presentAlert("Empleo Eliminado");
  }

  modificar(item) {
    console.log(item);
    let navigationExtras: NavigationExtras = {
      state: { cadenaTexto: item.id ,
               cadenaTexto2: item.titulo, 
               cadenaTexto3: item.texto
            }
    }
    this.router.navigate(['/modificar'], navigationExtras);
  }

}