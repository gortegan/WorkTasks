import { RegisterPage } from './../register/register';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginPage: any;
  registerPage: any;
  constructor(public navCtrl: NavController) {
    this.loginPage = LoginPage;
    this.registerPage = RegisterPage;
  }
}
