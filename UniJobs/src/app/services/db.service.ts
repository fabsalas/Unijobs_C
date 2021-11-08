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
  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS usuario(run INTEGER PRIMARY KEY, nombre_usu VARCHAR(50) NOT NULL, fecha_nac DATE NOT NULL, telef_usu INTEGER NOT NULL, correo_usu VARCHAR(50), clave_usu VARCHAR(50), fotoperfil_usu VARCHAR(2));";
  registro_usu: string = "INSERT or IGNORE INTO usuario(run, nombre_usu, fecha_nac, telef_usu, correo_usu, clave_usu, foto_perfil_usu ) VALUES (123456789, 'Fabian', 1998-10-10, 12345678, 'fasd@lol.com', 1234,'ft');";
  /*Tabla postulacion*/
  tablaPostulacion: string = "CREATE TABLE IF NO EXISTS postulacion (id_post INTEGER PRIMARY KEY autoincrement, run INTEGER, FOREIGN KEY (run) REFERENCES usuario (run), id_emp INTEGER,FOREIGN KEY (id_emp) REFERENCES empleo (id_empleo),fecha_post DATE NOT NULL, status VARCHAR(2) ;"; 
  /*tabla empleos */
  tablaEmpleos: string = "CREATE TABLE IF NOT EXISTS empleo(id_emp INTEGER PRIMARY KEY autoincrement, titulo_emp VARCHAR(50) NOT NULL, descripcion_emp TEXT NOT NULL, id_cat INTEGER NOT NULL, FOREIGN KEY (id_cat) REFERENCES categoria(id_cat),sueldo INTEGER NOT NULL, direccion VARCHAR(50) fecha_publi DATE NOT NULL, status varchar(2), run INTEGER NOT NULL,FOREIGN KEY (run) REFERENCES usuario (run));";
  registro_emp: string = "INSERT or IGNORE INTO empleo(id_emp, titulo_emp, descripcion_emp, id_cat,) VALUES (1, 'Titulo empleo', 'Descripcion del empleo que se quiere mostrar');";
  /*Tabla categoria*/
  tablaCategoria: string ="CREATE TABLE IF NOT EXISTS categoria (id_cat INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(50);";
  /*Tabla Ubicación*/
  /*Tabla Comuna*/
  
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
      this.presentAlert("Creo la Tabla post");
      //ejecutamos la creacion de tabla empleo
      await this.database.executeSql(this.tablaEmpleos, []);
      await this.database.executeSql(this.registro_emp, []);
      this.presentAlert("Creo la Tabla emp");
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
            id: res.rows.item(i).id,
            titulo: res.rows.item(i).titulo,  
            texto: res.rows.item(i).texto
           });
        }
      }
      //this.presentAlert("d");
      this.listaEmpleos.next(items);
    });
  }

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
    let data = [empleo.titulo, empleo.texto];
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

