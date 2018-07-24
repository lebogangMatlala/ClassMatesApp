import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


import arrClass from '../../app/ArrayClass';
import { ClassMates } from '../../app/ClassMates';
import { ViewPage } from '../view/view';
/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  ;

 
  addUser(name,surname,id,gender,email,address)
  {

    
          let obj = new ClassMates(name,surname,id,gender,email,address);
          arrClass.push(obj);
          console.log(arrClass);
          if(arrClass!=null)
          {
            const prompt = this.alertCtrl.create({
              title: 'Conformation',
              message: "User has been added",
              buttons: [
                {
                  text: 'Ok',
                  handler: data => {
                    console.log('OK clicked');
                    this.navCtrl.setRoot(ViewPage);
                  }
                }
              ]
            });
            prompt.present();
          }
        
      }
    

  }


