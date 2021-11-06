import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  constructor(public alertController: AlertController, public navCtrl: NavController) { }

  Mostrar() {
    this.presentAlert("Código de verificación","Hemos enviado un sms con su código de verificación, por favor, ingréselo a continuación: ");
    }
    async presentAlert(titulo:string,message:string){
      const alert = await this.alertController.create({
        header: titulo,
        message: message,
        buttons: ['Ok'],
        inputs: [
          {
            name: 'code',
            placeholder: 'Ingrese su código de verificación'
          },
        ],
      });
      await alert.present();
    }

  ngOnInit() {
  }

}
