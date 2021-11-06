import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usu="fabian";
  clave = 1234;
  usuario : string;
  contra : number;

  constructor(public toastController: ToastController, private router : Router) { }

  ngOnInit() {
  }

  ingresar(){
    if (this.usuario == this.usu && this.contra == this.clave){
      this.router.navigate(['/home']);
    }
    else if(this.usuario == null || this.contra ==null){
      this.presentToast("Usuario o contraseña en blanco")
    }
    else{
      this.presentToast("Usuario o contraseña incorrecta")
    }
      
    
  }
 
  
  async presentToast(message: string, duration?: number){
    const toast = await this.toastController.create(
      {
        message: message,
        duration: duration?duration:2000
      }
    );
    toast.present();
  }
  

}
