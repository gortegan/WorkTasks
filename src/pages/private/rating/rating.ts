import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the RatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-rating',
  templateUrl: 'rating.html',
})
export class RatingPage {
  workersVisibility:boolean = false;
  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
    this.storage.get('worker_visibility').then((val) => {
      this.workersVisibility = (val === 'true');
    });
  }

  ionViewDidLoad() {
  }

}
