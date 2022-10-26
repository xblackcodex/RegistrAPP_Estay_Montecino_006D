import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NoIngresado2Guard implements CanActivate {

  constructor(private alertController: AlertController, private navController:NavController){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('ingresado2')){
        this.navController.navigateRoot('inicio');
        this.alertMsg();
        return false;
      }
      else
      {
        return true;
      }
  }
  
  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'Lo Sentimos...',
      message: 'Tiene que ser Alumno para acceder a esta opcion',
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }

}

