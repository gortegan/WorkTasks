import { ListworkersPage } from './../listworkers/listworkers';
import { NewworkerPage } from './../newworker/newworker';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserPage } from '../user/user';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.createWorker = NewworkerPage;
    this.listWorker = ListworkersPage
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
