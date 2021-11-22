import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-mipublicacion',
  templateUrl: './mipublicacion.component.html',
  styleUrls: ['./mipublicacion.component.scss'],
})
export class MipublicacionComponent implements OnInit {
<<<<<<< Updated upstream
  empleo: any =[
=======
<<<<<<< Updated upstream
  empleo: any =[
=======
<<<<<<< Updated upstream
  empleo: any =[
=======
<<<<<<< Updated upstream
  empleo: any =[
=======
<<<<<<< Updated upstream
  empleo: any =[
=======
  empleo: any =
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    {
    id : '',
    titulo: '',
    texto: ''
<<<<<<< Updated upstream
  }
   ]
=======
<<<<<<< Updated upstream
  }
   ]
=======
<<<<<<< Updated upstream
  }
   ]
=======
<<<<<<< Updated upstream
  }
   ]
=======
<<<<<<< Updated upstream
  }
   ]
=======
  };
   
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  /* empleo :any [] =[]
    {
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
<<<<<<< Updated upstream
      //this.servicioBD.presentAlert("4");
=======
<<<<<<< Updated upstream
      //this.servicioBD.presentAlert("4");
=======
<<<<<<< Updated upstream
      //this.servicioBD.presentAlert("4");
=======
<<<<<<< Updated upstream
      //this.servicioBD.presentAlert("4");
=======
<<<<<<< Updated upstream
      //this.servicioBD.presentAlert("4");
=======
      //this.servicioBD.presentAlert("4") ;
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    });
  }

  eliminar(item){
    this.servicioBD.deleteEmpleo(this.empleo.id);
    this.servicioBD.presentAlert("Eliminado");
  }
  modificar(item) {
<<<<<<< Updated upstream
    console.log(item);
=======
<<<<<<< Updated upstream
    console.log(item);
=======
<<<<<<< Updated upstream
    console.log(item);
=======
<<<<<<< Updated upstream
    console.log(item);
=======
<<<<<<< Updated upstream
    console.log(item);
=======
    console.log(item); 
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    let navigationExtras: NavigationExtras = {
      state: { cadenaTexto: item.titulo, cadenaTexto2: item.texto, cadenaTexto3: item.id}
    }
    this.router.navigate(['/modificar'], navigationExtras);
  }

}
