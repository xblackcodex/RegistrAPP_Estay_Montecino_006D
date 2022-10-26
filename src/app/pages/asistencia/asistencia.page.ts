import { Component, OnInit, ViewChild } from '@angular/core';
import { AsistenciaService, Datos } from '../../services/asistencia.service';
import { Platform, ToastController, IonList} from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  datos: Datos[] = [];
  newDato: Datos = <Datos>{};
  @ViewChild('myList')myList :IonList; 

  constructor(private storageDatos: AsistenciaService, private plt: Platform, private toastController: ToastController, private menuController: MenuController) {
    this.plt.ready().then(()=>{
    this.loadDatos();
  }); }

  ngOnInit() {
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }

  //get
  loadDatos(){
    this.storageDatos.getDatos().then(datos=>{
      this.datos=datos;
    });
  }

  //create
  addDatos(){
    this.newDato.modified = Date.now();
    this.newDato.id = Date.now();
    this.storageDatos.addDatos(this.newDato).then(dato=>{
      this.newDato = <Datos>{};
      this.showToast('!Datos Agregados');
      this.loadDatos();
    });
  }

  //update
  updateDatos(dato: Datos ){
    dato.nomCompleto = `UPDATED: ${dato.nomCompleto}`;
    dato.modified = Date.now();
    this.storageDatos.updateDatos(dato).then(item=>{
      this.showToast('Elemento actualizado!')
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }

  //delete
  deleteDatos(dato: Datos){
    this.storageDatos.deleteDatos(dato.id).then(item=>{
      this.showToast('Elemento eliminado');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2000
    });
    toast.present();
  }

}
