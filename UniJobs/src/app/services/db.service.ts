import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Empleos } from './empleos';


@Injectable({
  providedIn: 'root'
})
export class DbService {

  public database: SQLiteObject;
  
  /*tabla empleos */
  TablaEmpleos: string = 
		"CREATE TABLE IF NOT EXISTS empleo(id_emp INTEGER PRIMARY KEY autoincrement, nombre_usu VARCHAR(50) NOT NULL, titulo_emp VARCHAR(50) NOT NULL, descrip_emp VARCHAR(50) NOT NULL, pago_emp NUMBER(4) NOT NULL, status_emp VARCHAR(50)NOT NULL);";
  registro_emp: string = "INSERT or IGNORE INTO empleo(id_emp, nombre_usu, titulo_emp, descrip_emp, pago_emp, status_emp) VALUES (1,'solomon','Paseo perruno','Necesito que alguien realice el paseo perruno', 2000, 'ayer');";
  /*update_emp :string = "UPDATE empleo SET titulo = 'zapato', texto = '123124214'  WHERE id = 1";*/  

  //tabla usuario//
  TablaUsuarios: string = "CREATE TABLE IF NOT EXISTS usuario(run_usu INTEGER PRIMARY KEY, numero_usu INTEGER NOT NULL, nombre VARCHAR(50) NOT NULL, apellido VARCHAR(50) NOT NULL, fec_nac DATE NOT NULL, correo VARCHAR(50) NOT NULL, nombre_usu VARCHAR(50)NOT NULL, clave VARCHAR(50)NOT NULL);";
  registro_usu: string = "INSERT or IGNORE INTO empleo(run_usu, numeri_usu, nombre, apellido, fec_nac, correo, nombre_usu, clave) VALUES (1,'Paseo perruno','Necesito que alguien realice el paseo perruno');";

  listaEmpleos = new BehaviorSubject([]);
  listaUsuarios = new BehaviorSubject([]);

  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private platform: Platform, public alertController: AlertController) {
    this.crearBD();

    //this.buscarEmpleos();
    //this.presentAlert("todo listo");
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  async crearTablas() {
    try {
      
      //ejecutamos la creacion de tabla empleo
      await this.database.executeSql(this.TablaEmpleos, []);
      await this.database.executeSql(this.registro_emp, []);
      /*await this.database.executeSql(this.update_emp, []);*/
      /*this.presentAlert("Creo la Tabla emp");*/
      this.buscarEmpleos();
         //ejecutamos la creacion de tabla Usuario
         await this.database.executeSql(this.TablaUsuarios, []);
         await this.database.executeSql(this.registro_usu, []);
         /*await this.database.executeSql(this.update_emp, []);*/
         /*this.presentAlert("Creo la Tabla emp");*/
      this.buscarUsuarios();
      this.isDbReady.next(true);
    } catch (e) {
      this.presentAlert("Ha ocurrido un error inesperado al crear la tabla:  " + e);
    }
  }

  buscarEmpleos() {
    //this.presentAlert("a");
    return this.database.executeSql('SELECT * FROM empleo', []).then(res => {
      let items: Empleos[] = [];
      //this.presentAlert("b");
      if (res.rows.length > 0) {
        //this.presentAlert("c");
        for (var i = 0; i < res.rows.length; i++) { 
          //this.presentAlert("d");
          items.push({ 
            id_emp: res.rows.item(i).id_emp,
            nombre_usu: res.rows.item(i).nombre_usu,
            titulo_emp: res.rows.item(i).titulo_emp,
            descrip_emp: res.rows.item(i).descrip_emp,
            pago_emp: res.rows.item(i).pago_emp,
            status_emp:res.rows.item(i).status_emp
           });
        }
      }
      //this.presentAlert("d");
      this.listaEmpleos.next(items);
    });
  }

  

  /**TOMA TODO EL OBSERVABLE Y GENERA COMO UNA COLECION EN JAVA Y LO RETORNA */
  fetchEmpleos(): Observable<Empleos[]> {
    return this.listaEmpleos.asObservable();
  }

  addEmpleo(titulo_emp, descrip_emp, pago_emp, status_emp) {
    let data = [titulo_emp, descrip_emp, pago_emp, status_emp];
    return this.database.executeSql('INSERT INTO empleo (titulo_emp, descrip_emp, pago_emp, status_emp) VALUES (?, ?, ?, ?)', data)
      .then(_res => {
        this.buscarEmpleos();
      })
  }

  updateEmpleo(id_emp, titulo_emp, descrip_emp, pago_emp, status_emp) {
    //this.presentAlert(titulo);
    let data = [titulo_emp, descrip_emp, pago_emp, status_emp, id_emp];
    //this.presentAlert(id+"");
    return this.database.executeSql('UPDATE empleo SET titulo_emp = ?, descrip_emp = ? , pago_emp= ?, status_emp= ?,  WHERE id = ?', data)
      .then(data => {
        //this.presentAlert("b");
        this.buscarEmpleos();
       // this.presentAlert("c");

      }) /*.catch(error => this.presentAlert(error.message));*/
      
  }

  deleteEmpleo(id_emp) {
    return this.database.executeSql('DELETE FROM empleo WHERE id_emp = ?',[id_emp])
      .then(_ => {
        this.buscarEmpleos();
      });
  }

  //Funciones usuarios

buscarUsuarios() {
  //this.presentAlert("a");
  return this.database.executeSql('SELECT * FROM usuario', []).then(res => {
    let items: Usuarios[] = [];
    //this.presentAlert("b");
    if (res.rows.length > 0) {
      //this.presentAlert("c");
      for (var i = 0; i < res.rows.length; i++) { 
        //this.presentAlert("d");
        items.push({ 
          numero_usu: res.rows.item(i).numero_usu,
          nombre: res.rows.item(i).nombre,
          apellido: res.rows.item(i).apellido,
          run_usu: res.rows.item(i).run_usu,
          fec_nac: res.rows.item(i).fec_nac,
          correo: res.rows.item(i).correo,
          nombre_usu: res.rows.item(i).nombre_usu,
          clave:  res.rows.item(i).clave
         });
      }
    }
    //this.presentAlert("d");
    this.listaUsuarios.next(items);
  });
}

/**TOMA TODO EL OBSERVABLE Y GENERA COMO UNA COLECION EN JAVA Y LO RETORNA */
fetchUsuarios(): Observable<Usuarios[]> {
  return this.listaUsuarios.asObservable();
}

addUsuario(numero_usu, nombre, apellido, run_usu, fec_nac, correo, nombre_usu, clave) {
  let data = [numero_usu, nombre, apellido, run_usu, fec_nac, correo, nombre_usu, clave];
  return this.database.executeSql('INSERT INTO empleo (numero_usu, nombre, apellido, run_usu, fec_nac, correo, nombre_usu, clave) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', data)
    .then(_res => {
      this.buscarUsuarios();
    })
}

updateUsuario( numero_usu, nombre, apellido, run_usu, fec_nac, correo, nombre_usu, clave) {
  //this.presentAlert(titulo);
  let data = [numero_usu, nombre, apellido, run_usu, fec_nac, correo, nombre_usu, clave, run_usu];
  //this.presentAlert(id+"");
  return this.database.executeSql('UPDATE usuario SET numero_usu = ?, nombre = ?, apellido = ?, run_usu = ?, fec_nac = ?, correo = ?, nombre_usu = ?, clave = ?  WHERE run_usu = ?', data)
    .then(data => {
      //this.presentAlert("b");
      this.buscarUsuarios();
     // this.presentAlert("c");

    }) /*.catch(error => this.presentAlert(error.message));*/
    
}

deleteUsuario(run_usu) {
  return this.database.executeSql('DELETE FROM usuario WHERE run_usu = ?',[run_usu])
    .then(_ => {
      this.buscarUsuarios();
    });
}

  
  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'empleos3.db',
        location: 'default'

      }).then((db: SQLiteObject) => {
        this.database = db;
        this.presentAlert("BD Creada"); 
        //llamamos a la creación de tablas
        this.crearTablas();
      }).catch(e => this.presentAlert(e));
    })
  }

 
  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: mensaje,
      buttons: ['Ok']
    });

    await alert.present();
  }


}

