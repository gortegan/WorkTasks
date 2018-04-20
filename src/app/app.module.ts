import { NewworkerPage } from './../pages/private/newworker/newworker';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import { UserPage } from '../pages/private/user/user';
import { SettingsPage } from '../pages/private/settings/settings';
import { WorkerPage } from '../pages/private/worker/worker';
import { ListworkersPage } from '../pages/private/listworkers/listworkers';
import { LogoutPage } from '../pages/logout/logout';
import { IonicStorageModule } from '@ionic/storage';
import { RatingPage } from '../pages/private/rating/rating';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    UserPage,
    SettingsPage,
    NewworkerPage,
    WorkerPage,
    ListworkersPage,
    LogoutPage,
    RatingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    UserPage,
    SettingsPage,
    NewworkerPage,
    WorkerPage,
    ListworkersPage,
    LogoutPage,
    RatingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
