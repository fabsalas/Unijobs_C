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
  tablaEmpleos: string = "CREATE TABLE IF NOT EXISTS empleo(id_emp INTEGER PRIMARY KEY autoincrement, titulo_emp VARCHAR(50) NOT NULL, descripcion_emp VARCHAR(50) NOT NULL, Pago_emp NUMBER());"; 
  registro_emp: string = "INSERT or IGNORE INTO empleo(id, titulo, texto) VALUES (1,'Paseo perruno','Necesito que alguien realice el paseo perruno');";
  /*update_emp :string = "UPDATE empleo SET titulo = 'zapato', texto = '123124214'  WHERE id = 1";*/  
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

  async crearTablas() {
    try {
      
      //ejecutamos la creacion de tabla empleo
      await this.database.executeSql(this.tablaEmpleos, []);
      await this.database.executeSql(this.registro_emp, []);
      /*await this.database.executeSql(this.update_emp, []);*/
      /*this.presentAlert("Creo la Tabla emp");*/
      this.buscarEmpleos();
         //ejecutamos la creacion de tabla Usuario
         await this.database.executeSql(this.tablaEmpleos, []);
         await this.database.executeSql(this.registro_emp, []);
         /*await this.database.executeSql(this.update_emp, []);*/
         /*this.presentAlert("Creo la Tabla emp");*/
         this.buscarUsuario();
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

  /**TOMA TODO EL OBSERVABLE Y GENERA COMO UNA COLECION EN JAVA Y LO RETORNA */
  fetchEmpleos(): Observable<Empleos[]> {
    return this.listaEmpleos.asObservable();
  }

  addEmpleo(titulo, texto) {
    let data = [titulo, texto];
    return this.database.executeSql('INSERT INTO empleo (titulo, texto) VALUES (?, ?)', data)
      .then(_res => {
        this.buscarEmpleos();
      })
  }

  updateEmpleo(id, titulo,texto) {
    //this.presentAlert(titulo);
    let data = [titulo, texto, id];
    //this.presentAlert(id+"");
    return this.database.executeSql('UPDATE empleo SET titulo = ?, texto = ?  WHERE id = ?', data)
      .then(data => {
        //this.presentAlert("b");
        this.buscarEmpleos();
       // this.presentAlert("c");

      }) /*.catch(error => this.presentAlert(error.message));*/
      
  }

  deleteEmpleo(id) {
    return this.database.executeSql('DELETE FROM empleo WHERE id = ?',[id])
      .then(_ => {
        this.buscarEmpleos();
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

//Funciones usuario

buscarUsuario() {
  //this.presentAlert("a");
  return this.database.executeSql('SELECT * FROM empleo', []).then(res => {
    let items: Uusarios[] = [];
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
    this.listaUsuarios.next(items);
  });
}

/**TOMA TODO EL OBSERVABLE Y GENERA COMO UNA COLECION EN JAVA Y LO RETORNA */
fetchUsuario(): Observable<Usuario[]> {
  return this.listaEmpleos.asObservable();
}

addUsuario(titulo, texto) {
  let data = [titulo, texto];
  return this.database.executeSql('INSERT INTO empleo (titulo, texto) VALUES (?, ?)', data)
    .then(_res => {
      this.buscarUsuario();
    })
}

updateUsuario(id, titulo,texto) {
  //this.presentAlert(titulo);
  let data = [titulo, texto, id];
  //this.presentAlert(id+"");
  return this.database.executeSql('UPDATE empleo SET titulo = ?, texto = ?  WHERE id = ?', data)
    .then(data => {
      //this.presentAlert("b");
      this.buscarUsuario();
     // this.presentAlert("c");

    }) /*.catch(error => this.presentAlert(error.message));*/
    
}

deleteUsuario(id) {
  return this.database.executeSql('DELETE FROM empleo WHERE id = ?',[id])
    .then(_ => {
      this.buscarUsuario();
    });
}
}

