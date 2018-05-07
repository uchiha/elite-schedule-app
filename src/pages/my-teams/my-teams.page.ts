import {Component} from '@angular/core';
import {NavController} from 'ionic-angular'; // needed when we do navigation in ionic framework
import {TournamentsPage} from '../pages'; // we'll push this page to the stack, need this import


@Component({
    templateUrl: 'my-teams.page.html'
})

export class MyTeamsPage{
    // typical Angular constructor injection to inject the NavController
    // into our class, after this is done, in goToTournaments we can now
    // refer to the navigation as "this.nav"
    constructor(private nav: NavController){ 
        
    }

    goToTournaments(){
        this.nav.push(TournamentsPage); //we've pushed the TournamentsPageModule onto the stack!
    }
}