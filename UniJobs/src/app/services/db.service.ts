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
  tablaEmpleos: string = "CREATE TABLE IF NOT EXISTS empleo(id INTEGER PRIMARY KEY autoincrement, titulo VARCHAR(50) NOT NULL, texto TEXT NOT NULL);"; 
  registro_emp: string = "INSERT or IGNORE INTO empleo(id, titulo, texto) VALUES (1,'Paseo perruno','Necesito que alguien realice el paseo perruno');";
<<<<<<< Updated upstream
  update_emp :string = "UPDATE empleo SET titulo = 'zapato', texto = '123124214'  WHERE id = 1";
=======
<<<<<<< Updated upstream
  update_emp :string = "UPDATE empleo SET titulo = 'zapato', texto = '123124214'  WHERE id = 1";
=======
<<<<<<< Updated upstream
  update_emp :string = "UPDATE empleo SET titulo = 'zapato', texto = '123124214'  WHERE id = 1";
=======
<<<<<<< Updated upstream
  update_emp :string = "UPDATE empleo SET titulo = 'zapato', texto = '123124214'  WHERE id = 1";
=======
<<<<<<< Updated upstream
  update_emp :string = "UPDATE empleo SET titulo = 'zapato', texto = '123124214'  WHERE id = 1";
=======
  /*update_emp :string = "UPDATE empleo SET titulo = 'zapato', texto = '123124214'  WHERE id = 1";*/
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  
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
      this.presentAlert("Creo la Tabla emp");
      this.buscarEmpleos();
      this.isDbReady.next(true);
    } catch (error) {
      this.presentAlert("Ha ocurrido un error inesperado al crear la tabla:  " + error.message);
    }
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
  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: mensaje,
      buttons: ['Cancel']
    });

    await alert.present();
<<<<<<< Updated upstream
  }

 
=======
<<<<<<< Updated upstream
  }

 
=======
<<<<<<< Updated upstream
  }

 
=======
<<<<<<< Updated upstream
  }

 
=======
  }

 
=======
  async crearTablas() {
    try {
      //ejecutamos la creacion de tabla empleo
      await this.database.executeSql(this.tablaEmpleos, []);
      await this.database.executeSql(this.registro_emp, []);
      /*await this.database.executeSql(this.update_emp, []);*/
      this.presentAlert("Creo la Tabla emp");
      this.buscarEmpleos();
      this.isDbReady.next(true);
    } catch (e) {
      this.presentAlert("Ha ocurrido un error inesperado al crear la tabla:  " + e);
    }
  }

>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
  
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
 /**TOMA TODO EL OBSERVABLE Y GENERA COMO UNA COLECION EN JAVA Y LO RETORNA */
  fetchEmpleos(): Observable<Empleos[]> {
    return this.listaEmpleos.asObservable();
  }

  addEmpleo(titulo, texto) {
    let data = [titulo, texto];
    return this.database.executeSql('INSERT INTO empleo (titulo, texto) VALUES (?, ?)', data)
      .then(_res => {
        this.buscarEmpleos();
      });
  }

  updateEmpleo(id, empleo:Empleos) {
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
    let data = [empleo.titulo, empleo.texto];
    return this.database.executeSql('UPDATE empleo SET titulo = ?, texto = ?  WHERE id = ${id}', data)
=======
<<<<<<< Updated upstream
    let data = [empleo.titulo, empleo.texto];
    return this.database.executeSql('UPDATE empleo SET titulo = ?, texto = ?  WHERE id = ${id}', data)
=======
>>>>>>> Stashed changes
    
    let data = [empleo.titulo,empleo.texto];
    
    return this.database.executeSql('UPDATE empleo SET titulo = ?, texto = ?  WHERE id = ?', data)
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
      .then(data => {
        this.buscarEmpleos();
      }).catch(error => this.presentAlert(error.message));
      
  }

<<<<<<< Updated upstream
  deleteEmpleo(id:number) {
=======
<<<<<<< Updated upstream
  deleteEmpleo(id) {
<<<<<<< Updated upstream
=======
=======
  deleteEmpleo(id:number) {
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    return this.database.executeSql('DELETE FROM empleo WHERE id = ?',[id])
      .then(_ => {
        this.buscarEmpleos();
      });
  }
  
<<<<<<< Updated upstream

 
=======
<<<<<<< Updated upstream

 
=======
<<<<<<< Updated upstream

 
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
=======
  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: mensaje,
      buttons: ['Cancel']
    });

    await alert.present();
  }
>>>>>>> Stashed changes


 
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes



}

