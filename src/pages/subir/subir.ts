import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';



@Component({
  selector: 'page-subir',
  templateUrl: 'subir.html',
})
export class SubirPage {

  constructor(private viewCtrl: ViewController) {
  }

  cerrar_modal(){
    this.viewCtrl.dismiss();
  }


}
