import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { ResetPage } from './../reset/reset';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var provider = new firebase.auth.GoogleAuthProvider();
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

   email;
   password;
   human={
    
     email:"",
     password:"",
   }
   login: FormGroup;
   loginError: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb : FormBuilder) {
    this.login = this.fb.group({
    
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    });
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  Signup(){
    this.navCtrl.push("SignupPage");
  }

submit(){
  firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(User =>{
    this.navCtrl.push("HomePage");
  })
}

loginUser(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(User =>{
    this.navCtrl.push("HomePage");
  })

}
reset(){
  this.navCtrl.push("ResetPage");
}
}
