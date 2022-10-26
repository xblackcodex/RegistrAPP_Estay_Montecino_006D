import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  formularioLogin: FormGroup;
  usuarios : Usuario[] = [];

  constructor(public alertController: AlertController, public navCtrl: NavController, private menuController:MenuController, private registroService: RegistroserviceService,
    private toast: ToastController ) { }

  ngOnInit() {
  }


  mostrarMenu(){
    this.menuController.open('first');

  }

}
