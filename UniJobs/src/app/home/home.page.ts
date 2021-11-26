import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{

  empleo: any =[
    {
    id : '',
    titulo: '',
    texto: ''
  }
   ]

  constructor(private router:Router, private servicioBD:DbService) {
    this.router.navigate(['home/empleos'])
  }


  
/**Funcion del segment para manipular la informacion en el home */
  segmentChanged($event){
  let direccion = $event.detail.value;
    this.router.navigate(['home/'+direccion]);
  }

  getItem($event){
    const valor = $event.target.value;
    console.log(valor);
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
  eliminar(item:any){
    this.servicioBD.deleteEmpleo(this.empleo.id);
    this.servicioBD.presentAlert("Eliminado");
  }
  modificar(item:any) {
    console.log(item);
    let navigationExtras: NavigationExtras = {
      state: { cadenaTexto: item.titulo, cadenaTexto2: item.texto, cadenaTexto3: item.id}
    }
    this.router.navigate(['/modificar'], navigationExtras);
  }

}
