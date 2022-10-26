import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

interface Componente{
  icon: string; 
  name:string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private loadingCtrl: LoadingController, public alertController: AlertController,
    public navCtrl: NavController,) {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cerrando Sesion...',
      duration: 3000,
      spinner: 'circles',
    });

    loading.present();
  }

  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Deseas Cerrar Sesion?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            
          }
        }, {
          text: 'Si',
          handler: () => {
            localStorage.removeItem('ingresado');
            localStorage.removeItem('ingresado2');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });

    await alert.present();
    
  }

  componentes : Componente[] =[
    {
      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/inicio'
    },
    {
      icon: 'qr-code-outline',
      name: 'Generar QR',
      redirecTo: '/codigo'
    },
    {
      icon: 'camera-outline',
      name: 'Abrir Camara',
      redirecTo: '/camara'
    },
    {
      icon: 'clipboard-outline',
      name: 'Datos',
      redirecTo: '/asistencia'
    },
    {
      icon: 'newspaper-outline',
      name: 'Noticias',
      redirecTo: '/noticias'
    },
    
  ];
}
