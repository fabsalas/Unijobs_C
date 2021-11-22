import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],


})
export class ModificarPage implements OnInit {
 /* empleo :any ={
    id_emp: '',
    status_emp:'',
    /*imageURL:'',
    titulo_emp: '',
    nombre_usu: '',
    descrip_emp: '',
    sueldo_emp:''
  }*/
  empleo :any =
    {
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
      id:'',
      titulo:'',
      texto:''  
    }
  

  /*constructor(private router:Router, private activeroute:ActivatedRoute, private servicioBD: DbService) { 
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
=======
      Id:'',
      Titulo:'',
      Texto:''  
    };
  

  /*constructor(private router:Router , private activeroute:ActivatedRoute, private servicioBD: DbService) { 
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  this.activeroute.queryParams.subscribe(params => {
    if(this.router.getCurrentNavigation().extras.state){
      this.empleo.Id = this.router.getCurrentNavigation().extras.state.cadenaTexto;
      this.empleo.Titulo_emp = this.router.getCurrentNavigation().extras.state.cadenaTexto2;
      this.empleo.Status_emp = this.router.getCurrentNavigation().extras.state.cadenaTexto3;
      this.empleo.Nombre_usu = this.router.getCurrentNavigation().extras.state.cadenaTexto4;
      this.empleo.Descrip_emp = this.router.getCurrentNavigation().extras.state.cadenaTexto5;
      this.empleo.Sueldo_emp = this.router.getCurrentNavigation().extras.state.cadenaTexto6;
    }
   })*/
   constructor(private router: Router, private activeroute: ActivatedRoute, private servicioBD: DbService) {
    this.activeroute.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
<<<<<<< Updated upstream
        this.empleo.id = this.router.getCurrentNavigation().extras.state.cadenaTexto;
        this.empleo.titulo = this.router.getCurrentNavigation().extras.state.cadenaTexto2;
        this.empleo.texto = this.router.getCurrentNavigation().extras.state.cadenaTexto3;
=======
<<<<<<< Updated upstream
        this.empleo.titulo = this.router.getCurrentNavigation().extras.state.cadenaTexto;
        this.empleo.texto = this.router.getCurrentNavigation().extras.state.cadenaTexto2;
        this.empleo.id = this.router.getCurrentNavigation().extras.state.cadenaTexto3;
=======
<<<<<<< Updated upstream
        this.empleo.titulo = this.router.getCurrentNavigation().extras.state.cadenaTexto;
        this.empleo.texto = this.router.getCurrentNavigation().extras.state.cadenaTexto2;
        this.empleo.id = this.router.getCurrentNavigation().extras.state.cadenaTexto3;
=======
<<<<<<< Updated upstream
        this.empleo.id = this.router.getCurrentNavigation().extras.state.cadenaTexto;
        this.empleo.titulo = this.router.getCurrentNavigation().extras.state.cadenaTexto2;
        this.empleo.texto = this.router.getCurrentNavigation().extras.state.cadenaTexto3;
=======
<<<<<<< Updated upstream
        this.empleo.id = this.router.getCurrentNavigation().extras.state.cadenaTexto;
        this.empleo.titulo = this.router.getCurrentNavigation().extras.state.cadenaTexto2;
        this.empleo.texto = this.router.getCurrentNavigation().extras.state.cadenaTexto3;
=======
<<<<<<< Updated upstream
        this.empleo.id = this.router.getCurrentNavigation().extras.state.cadenaTexto;
        this.empleo.titulo = this.router.getCurrentNavigation().extras.state.cadenaTexto2;
        this.empleo.texto = this.router.getCurrentNavigation().extras.state.cadenaTexto3;
=======
        this.empleo.Titulo = this.router.getCurrentNavigation().extras.state.cadenaTexto;
        this.empleo.Texto = this.router.getCurrentNavigation().extras.state.cadenaTexto2;
        this.empleo.Id = this.router.getCurrentNavigation().extras.state.cadenaTexto3;
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
      }
    })

  }

  ngOnInit() {
  }
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
  editaremp(){
    this.servicioBD.updateEmpleo(this.empleo.id,this.empleo);
    this.servicioBD.presentAlert("Modificado");
    
    this.router.navigate(['/home']);
  }
<<<<<<< Updated upstream
=======
=======
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  editaremp(){
    this.servicioBD.updateEmpleo(this.empleo.id,this.empleo)
      this.servicioBD.presentAlert("Modificado");
      this.router.navigate(['/home']);
  }
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
=======
  /*editaremp(){
    this.servicioBD.updateEmpleo(this.empleo.id,this.empleo.texto);
    this.servicioBD.presentAlert("Modificado");
    
    this.router.navigate(['/home']);
  }*/
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes

 }

