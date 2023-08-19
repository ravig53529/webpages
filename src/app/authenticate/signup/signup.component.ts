import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public password:string='';
 public passwordtype='password';
 public seePasswordStatus:boolean=true;
 public  signup={
  email:'',
  password:''
} 
 constructor(){
  
 }
  // to see password
  public seePassword():void{
   if(this.signup){
    this.passwordtype='text';
    this.seePasswordStatus=false
   }
  }
  public hidePassword():void{
    if(this.signup){
      this.passwordtype='password';
      this.seePasswordStatus=true
    }
  }
  public onSubmit(signform:any):void{
    if(this.signup){
     console.log(this.signup)
    }
  }
}
