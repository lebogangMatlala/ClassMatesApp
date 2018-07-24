import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import arrIndx from '../../app/index';

import arrClass from '../../app/ArrayClass';
import { ClassMates } from '../../app/ClassMates';

import { ViewPage } from '../view/view';

/**
 * Generated class for the ViewAllPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-all',
  templateUrl: 'view-all.html',
})
export class ViewAllPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewAllPage');
  }

  num=arrIndx[0];

  clName = arrClass[this.num].name;
  clSurname= arrClass[this.num].surname;
  clId= arrClass[this.num].id;
  clgender= arrClass[this.num].gender;
  clemail= arrClass[this.num].email;
  claddress= arrClass[this.num].address;

  updateClass(name,surname,id,gender,email,address)
  {

    let objct= new ClassMates(name,surname,id,gender,email,address);
    arrClass.splice(this.num,1,objct);
    console.log(objct);
    const prompt = this.alertCtrl.create({
      title: 'Conformation',
      message: "User has been Updated",
      buttons: [
        {
          text: 'ok',
          handler: data => {
            console.log('ok clicked');
            this.navCtrl.setRoot(ViewPage);
          }
        }
      ]
    });
    prompt.present();
  }

          delete()
        {
         
          const confirm = this.alertCtrl.create({
            title: 'Conformation',
            message: 'Do you want to delete the user account?',
            buttons: [
              {
                text: 'No',
                handler: () => {
                  console.log('No clicked');
                  this.navCtrl.push(ViewAllPage);
                }
              },
              {
                text: 'Yes',
                handler: () => {
                  console.log('Yes clicked');
                  arrClass.splice(arrIndx[0],1);
                  console.log(arrClass);
        this.navCtrl.push(ViewPage);
                }
              }
            ]
          });
          confirm.present();

        }
}




