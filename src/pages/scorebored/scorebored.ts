import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import arrTeam from '../home/Team';
/**
 * Generated class for the ScoreboredPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scorebored',
  templateUrl: 'scorebored.html',
})
export class ScoreboredPage {

  scoreA=0;
  scoreB=0;
  try=5;
  Penalty=3;
  Conversion=2;
  team;

  arrTemp=arrTeam;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoreboredPage');
  }
selectTeam(i){

  this.team=i;
}
addTry(){

  if(this.team==1){
    this.scoreA=this.scoreA+this.try;
  }else{
    this.scoreB=this.scoreB+this.try;
  }
  
  
}
addPenalty(){

  if(this.team==1){
    this.scoreA=this.scoreA+this.Penalty;
  }else{
    this.scoreB=this.scoreB+this.Penalty;
  }
 
}
addCon(){

  if(this.team==1){
    this.scoreA=this.scoreA+this.Conversion;
  }else{
    this.scoreB=this.scoreB+this.Conversion;
  }
}
clear(){
  this.arrTemp.splice(0);
  this.navCtrl.push(HomePage);
}
deleteTry(){

  if(this.team==1 ){
    if(this.scoreA >0){
      this.scoreA=this.scoreA-this.try;
    }else{
      alert("Score is 0");
    }
      
    }else{
      if(this.scoreB >0){
        this.scoreB=this.scoreB-this.try;
      }else{
        alert("Score is 0");
      }    
}
}
deletePenalty(){
 
  if(this.team==1 ){
    if(this.scoreA >0){
      this.scoreA=this.scoreA-this.Penalty;
    }else{
      alert("Score is 0");
    }
      
    }else{
      if(this.scoreB >0){
        this.scoreB=this.scoreB-this.Penalty;
      }else{
        alert("Score is 0");
      }    
}
}
deleteCon(){

  if(this.team==1 ){
    if(this.scoreA >0){
      this.scoreA=this.scoreA-this.Conversion;
    }else{
      alert("Score is 0");
    }
      
    }else{
      if(this.scoreB >0){
        this.scoreB=this.scoreB-this.Conversion;
      }else{
        alert("Score is 0");
      }
     
    }
  
  
}

}
