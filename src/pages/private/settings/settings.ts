import { ListworkersPage } from './../listworkers/listworkers';
import { NewworkerPage } from './../newworker/newworker';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  createWorker: any;
  listWorker: any;
  toogle = false;
  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
    this.createWorker = NewworkerPage;
    this.listWorker = ListworkersPage
    if(this.storage.get('worker_visibility')) {
     this.storage.get('worker_visibility').then((val) => {
        this.toogle = val;
      });      
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  updateAvailable(item: any) {
    this.storage.set('worker_visibility', this.toogle.toString());
  }

}
