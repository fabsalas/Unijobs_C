import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-mipublicacion',
  templateUrl: './mipublicacion.component.html',
  styleUrls: ['./mipublicacion.component.scss'],
})
export class MipublicacionComponent implements OnInit {

   empleo :any [] =[]
    /*{
      id_emp: 1,
      status_emp:'publicado hace 2 min.',
      imageURL:'../../assets/img/paseomascota.png',
      titulo_emp: 'Paseo de mascota.',
      nombre_usu: 'Jhon snow',
      descrip_emp: 'necesito pasear a mi lobo.'
    },
    {
      id_emp: 2,
      status_emp:'publicado hace 2 min.',
      imageURL:'../../assets/img/paseomascota.png',
      titulo_emp: 'Paseo de mascota.',
      nombre_usu: 'Jhon snow',
      descrip_emp: 'necesito pasear a mi lobo.'
    },*/
    
  

  
  constructor(private router:Router, private servicioBD: DbService) { }


  modificar(item){
    console.log(item)/*se usa para comprobar en consola */
    let navigatioExtras: NavigationExtras ={
      state:{
      cadenaTexto: item.id_emp,
      cadenaTexto2: item.titulo_emp,
      cadenaTexto3: item.status_emp,
      cadenaTexto4: item.nombre_usu,
      cadenaTexto5: item.descrip_emp,
      cadenaTexto6: item.sueldo_emp
      }
    } 
    this.router.navigate(['/modificar'], navigatioExtras);
  }

  eliminar(){
    
  }
  ngOnInit() {}

}
