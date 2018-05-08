import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MyTeamsPage} from '../pages';

/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');
  }

  navigate(){
    // provides a way to navigate backward. But other pages
    // other than that of the homepage will have a back button
    // automatic in ionic framework.
    this.navCtrl.pop(); 
  }
}
