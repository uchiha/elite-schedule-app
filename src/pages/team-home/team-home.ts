import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {StandingsPage, TeamDetailPage, MyTeamsPage} from '../pages';

/**
 * Generated class for the TeamHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {
  
  team: any;
  teamDetailTab = TeamDetailPage;
  standingsTab = StandingsPage;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.team = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }

  goHome(){
    // this.navCtrl.push(MyTeamsPage); // this gives out a weird "back" button, meaning it did not go to the actual root!
    this.navCtrl.popToRoot(); // this is the correct approach
  }

}
