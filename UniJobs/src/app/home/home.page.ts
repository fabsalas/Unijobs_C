import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{
<<<<<<< Updated upstream
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

=======
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes

  empleo: any =[
    {
    id : '',
    titulo: '',
    texto: ''
  }
   ]

<<<<<<< Updated upstream
=======
=======
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

>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  constructor(private router:Router, private servicioBD:DbService) {
    this.router.navigate(['home/empleos'])
  }


  
/**Funcion del segment para manipular la informacion en el home */


  getItem($event){
    const valor = $event.target.value;
    console.log(valor);
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
  }

<<<<<<< Updated upstream
  getItem($event){
    const valor = $event.target.value;
    console.log(valor);
=======
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
<<<<<<< Updated upstream

  getItem($event){
    const valor = $event.target.value;
    console.log(valor);
=======
  eliminar(empleo){
    this.servicioBD.deleteEmpleo(this.empleo.id);
    this.servicioBD.presentAlert("Eliminado");
  }
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
  eliminar(item:any){
    this.servicioBD.deleteEmpleo(this.empleo.id);
    this.servicioBD.presentAlert("Eliminado");
  }
  modificar(item:any) {
    console.log(item);
    let navigationExtras: NavigationExtras = {
      state: { cadenaTexto: item.titulo, cadenaTexto2: item.texto, cadenaTexto3: item.id}
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
  eliminar(empleo){
    this.servicioBD.deleteEmpleo(this.empleo.id);
    this.servicioBD.presentAlert("Eliminado");
  }
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  modificar(item) {

    let navigationExtras: NavigationExtras = {
      state: { cadenaTexto: item.id ,cadenaTexto2: item.titulo, cadenaTexto3: item.texto}
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    }
    this.router.navigate(['/modificar'], navigationExtras);
  }

}

/**API NATIVA DE CAMERA
 * 
 * image: any;

  constructor (
    private camera: Camera
  ) {}

  takePicture() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    this.camera.getPicture(options)
    .then((imageData) => {
       this.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }



 * 
 */
