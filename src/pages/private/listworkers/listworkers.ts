import { WorkerPage } from './../worker/worker';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListworkersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-listworkers',
  templateUrl: 'listworkers.html',
})
export class ListworkersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListworkersPage');
  }
  itemSelected(item: string) {
    console.log("Selected Item", item);
    this.navCtrl.push(WorkerPage);
  }

}
