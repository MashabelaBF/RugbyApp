import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScoreboredPage } from '../scorebored/scorebored';
import arrTeam, { Team } from './Team';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {

  }

  gotoScore() {
    this.navCtrl.push(ScoreboredPage);
  }
  add(team1, team2) {

    let obj = new Team(team1, team2);
    arrTeam.push(obj);

    if (team1 != team2) {
    
      this.navCtrl.push(ScoreboredPage);
    } else {
      alert("Team names cannot be the same");
      arrTeam.splice(0);
      
    }

  }
 
}
