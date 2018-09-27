import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {


   username;
   email;
   password;
   human={
 
     username:"",
     email:"",
     password:"",
   }

   login: FormGroup;
   signupError: string;

 constructor(public navCtrl: NavController, public navParams: NavParams,private fb:FormBuilder) {
   this.login = this.fb.group({
     
     username:['',[Validators.required]],
     email:['',[Validators.required]],
     password:['',[Validators.required]]
   });


 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad SignupPage');
 }
 submit(){
   firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(user => {
     this.navCtrl.push("LoginPage")
   })

 }

}
