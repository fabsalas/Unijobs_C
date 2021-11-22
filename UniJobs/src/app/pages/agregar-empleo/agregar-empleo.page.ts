import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-agregar-empleo',
  templateUrl: './agregar-empleo.page.html',
  styleUrls: ['./agregar-empleo.page.scss'],
})
export class AgregarEmpleoPage implements OnInit {

  /*empleo :any []=[]*/

 /* empleo :any =[
    {
      Titulo_emp:'',
      status_emp:'',  
<<<<<<< Updated upstream
      nombre_usu:'',
=======
<<<<<<< Updated upstream
      nombre_usu:'',
=======
<<<<<<< Updated upstream
      nombre_usu:'',
=======
<<<<<<< Updated upstream
      nombre_usu:'',
=======
      nombre_usu:'', 
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
      descrip_emp:'',
      sueldo_emp:''
    }
  ]*/
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  empleo :any =[
=======
  empleo :any =
>>>>>>> Stashed changes
    {
      id:'',
      titulo:'',
      texto:''  
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
  constructor(private router: Router,private servicioBD: DbService) { }

  ngOnInit() {
  }

<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  agregaremp(){
    this.servicioBD.addEmpleo(this.empleo.titulo, this.empleo.texto);
    this.servicioBD.presentAlert("Registro realizado");
    console.log('lol');
<<<<<<< Updated upstream
    this.router.navigate(['/home']);
=======
<<<<<<< Updated upstream
    this.router.navigate(['/home/empleos']);
=======
<<<<<<< Updated upstream
    this.router.navigate(['/home/empleos']);
=======
    this.router.navigate(['/home']);
=======
<<<<<<< Updated upstream
  agregaremp(){
=======
  publicaremp(){ 
>>>>>>> Stashed changes
    this.servicioBD.addEmpleo(this.empleo.titulo, this.empleo.texto);
    this.servicioBD.presentAlert("Registro realizado");
<<<<<<< Updated upstream
    console.log('lol');
    this.router.navigate(['/home']);
<<<<<<< Updated upstream
=======
=======
    /*console.log('registro hecho');*/
    this.router.navigate(['/empleos']);
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  }

  
}


