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
  /*Tabla Usuario*/
  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS usuario(run INTEGER PRIMARY KEY, nombre_usu VARCHAR(50) NOT NULL, apellido_usu  VARCHAR(50) NOT NULL, usuario VARCHAR(50) NOT NULL, fecha_nac DATE NOT NULL, telef_usu INTEGER NOT NULL, correo_usu VARCHAR(50), clave_usu VARCHAR(50), fotoperfil_usu VARCHAR(2));";
  registro_usu: string = "INSERT or IGNORE INTO usuario(run, nombre_usu, fecha_nac, telef_usu, correo_usu, clave_usu, fotoperfil_usu ) VALUES (123456789, 'Fabian', 1998-10-10, 12345678, 'fasd@lol.com', 1234,'ft');";
  /*Tabla postulacion*/
  tablaPostulacion: string = "CREATE TABLE IF NO EXISTS postulacion (id_post INTEGER PRIMARY KEY autoincrement, run INTEGER, FOREIGN KEY (run) REFERENCES usuario (run),fecha_post DATE NOT NULL, status VARCHAR(2) ;"; 
  registro_post: string = "INSERT or IGNORE INTO postulacion(id_post, run, fecha_post, status) VALUES (1, 123456789 , 2021-10-10, 'Disponible o Ocupado');";
  /*tabla empleos */
  tablaEmpleo: string = "CREATE TABLE IF NO EXISTS empleo (id_emp INTEGER PRIMARY KEY autoincrement, id_cat INTEGER, FOREIGN KEY (id_cat) REFERENCES categoria (id_cat), titulo_emp VARCHAR(50) NOT NULL, descrip_emp VARCHAR(100) NOT NULL, sueldo INTEGER NOT NULL; fec_publi DATE NOT NULL, run INTEGER, FOREIGN KEY (run) REFERENCES usuario (run) );"; 
  registro_emp: string = "INSERT or IGNORE INTO empleo(id_emp, id_cat, titulo_emp, descrip_emp, sueldo,fec_publi, run) VALUES (1, 1 , 'Paseo de mascota', trabajo por dinero', 15000, 08-11-2021,123456789);";
  /*Tabla categoria*/
  tablaCategoria: string ="CREATE TABLE IF NOT EXISTS categoria (id_cat INTEGER PRIMARY KEY autoincrement, nombre_categ VARCHAR(50) NOT NULL;)";
  registro_categ: string = "INSERT or IGNORE INTO categoria(id_cat, nombre_categ) VALUES (1, 'paseo de mascota');";
  /*Tabla Direccion*/
  tablaDireccion: string ="CREATE TABLE IF NOT EXISTS direccion (id_direc INTEGER PRIMARY KEY autoincrement, descripcion VARCHAR(50) NOT NULL,id_com INTEGER, FOREIGN KEY (id_com) REFERENCES comuna (id_com);";
  registro_direc: string = "INSERT or IGNORE INTO direccion(id_direc, descripcion, id_com) VALUES (1,'Santa Helena 123', 1);";
  /*Tabla Comuna*/
  tablaComuna: string ="CREATE TABLE IF NOT EXISTS comuna (id_com INTEGER PRIMARY KEY autoincrement, nombre_comuna VARCHAR(50) NOT NULL);";
  registro_comun: string = "INSERT or IGNORE INTO comuna(id_comu,  nombre_comuna) VALUES (1,  'Huechuraba');";
  
  listaEmpleos = new BehaviorSubject([]);

  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private platform: Platform, public alertController: AlertController) {
    this.crearBD();

    //this.buscarEmpleos();
    //this.presentAlert("todo listo");
  }

  dbState() {
    return this.isDbReady.asObservable();
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

  async crearTablas() {
    try {
       //ejecutamos la creacion de tabla usuario
      await this.database.executeSql(this.tablaUsuario, []);
      await this.database.executeSql(this.registro_usu, []);
      this.presentAlert("Creo la Tabla usu");
       //ejecutamos la creacion de tabla postulación
      await this.database.executeSql(this.tablaPostulacion, []);
      await this.database.executeSql(this.registro_post, []);
      this.presentAlert("Creo la Tabla post");
      //ejecutamos la creacion de tabla empleo
      await this.database.executeSql(this.tablaEmpleo, []);
      await this.database.executeSql(this.registro_emp, []);
      this.presentAlert("Creo la Tabla emp");
       //ejecutamos la creacion de tabla categoria
       await this.database.executeSql(this.tablaCategoria, []);
       await this.database.executeSql(this.registro_categ, []);
       this.presentAlert("Creo la Tabla categ");
        //ejecutamos la creacion de tabla direccion
      await this.database.executeSql(this.tablaDireccion, []);
      await this.database.executeSql(this.registro_direc, []);
      this.presentAlert("Creo la Tabla direc");
       //ejecutamos la creacion de tabla comuna
       await this.database.executeSql(this.tablaComuna, []);
       await this.database.executeSql(this.registro_comun, []);
       this.presentAlert("Creo la Tabla comun");
      this.buscarEmpleos();
      this.isDbReady.next(true);
    } catch (e) {
      this.presentAlert("error creartabla " + e);
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
            id_emp: res.rows.item(i).id,
            titulo_emp: res.rows.item(i).titulo,  
            descrip_emp: res.rows.item(i).descrip_emp,
            sueldo: res.rows.item(i).sueldo
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

  addEmpleo(titulo, texto) {
    let data = [titulo, texto];
    return this.database.executeSql('INSERT INTO empleo (titulo, texto) VALUES (?, ?)', data)
      .then(res => {
        this.buscarEmpleos();
      });
  }

  updateEmpleo(id, empleo: Empleos) {
    let data = [empleo.titulo_emp, empleo.descrip_emp];
    return this.database.executeSql('UPDATE empleo SET titulo = ?, texto = ? WHERE id = ${id}', data)
      .then(data => {
        this.buscarEmpleos();
      })
  }

  deleteEmpleo(id) {
    return this.database.executeSql('DELETE FROM empleo WHERE id = ?', [id])
      .then(_ => {
        this.buscarEmpleos();
      });
  }
  

  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: mensaje,
      buttons: ['Cancel']
    });

    await alert.present();
  }



}

