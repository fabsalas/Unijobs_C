import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],


})
export class ModificarPage implements OnInit {
  empleo :any ={
    id_emp: '',
    status_emp:'',
    /*imageURL:'',*/
    titulo_emp: '',
    nombre_usu: '',
    descrip_emp: '',
    sueldo_emp:''
  }
  

  constructor(private router:Router, private activeroute:ActivatedRoute, private servicioBD: DbService) { 
  this.activeroute.queryParams.subscribe(params => {
    if(this.router.getCurrentNavigation().extras.state){
      this.empleo.Id = this.router.getCurrentNavigation().extras.state.cadenaTexto;
      this.empleo.Titulo_emp = this.router.getCurrentNavigation().extras.state.cadenaTexto2;
      this.empleo.Status_emp = this.router.getCurrentNavigation().extras.state.cadenaTexto3;
      this.empleo.Nombre_usu = this.router.getCurrentNavigation().extras.state.cadenaTexto4;
      this.empleo.Descrip_emp = this.router.getCurrentNavigation().extras.state.cadenaTexto5;
      this.empleo.Sueldo_emp = this.router.getCurrentNavigation().extras.state.cadenaTexto6;
    }
   })

  }

  ngOnInit() {
  }

 }

