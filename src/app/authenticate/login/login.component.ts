import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

 public password:string='';
 public passwordtype='password';
 public seePasswordStatus:boolean=true;
 public  login={
  email:'',
  password:''
} 
 constructor(){
  
 }
  // to see password
  public seePassword():void{
   if(this.login){
    this.passwordtype='text';
    this.seePasswordStatus=false
   }
  }
  public hidePassword():void{
    if(this.login){
      this.passwordtype='password';
      this.seePasswordStatus=true
    }
  }
  public onSubmit(loginForm:any):void{
    if(this.login){
     console.log(loginForm)
    }
  }
}
