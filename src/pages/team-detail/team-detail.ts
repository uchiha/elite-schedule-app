import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

import {MyTeamsPage} from '../pages'

/**
 * Generated class for the TeamDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {

  team: any;
  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.team = this.navParams.data;
    console.log('**nav params:', this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailPage');
  }

  goHome(){
    // this.navCtrl.push(MyTeamsPage); //goes home, but real weird, primary navbar still identifies with the team name! Not elite sched.
    // this.navCtrl.popToRoot(); //nothing works, because it thinks that its in the root already! This is an inner tab page.
    //                           //TeamDetail is an inner tab page, so as far as TeamDetail is concerned, we're at the root!
    this.navCtrl.parent.parent.popToRoot(); // this will go is to get a handle to the controller on the parent containing this page
                                            // which is the TeamHomePage. And we need to pop to the root on that navigation.
  }

}
