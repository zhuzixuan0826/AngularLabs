import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username = '';
password = '';
correctUsername = '1@qq.com';
correctPassword = '1111';
correctUsernametwo = '2@qq.com';
correctPasswordtwo = '2222';
correctUsernamethree= '3@qq.com';
correctPasswordthree = '3333';

alertErro ='';

errotimes = 0;


  constructor(private router: Router) {
   }

  ngOnInit() {
 
  }

  errorCalculation(){
    this.errotimes += 1;
    this.errorJudge();
  }

  errorJudge(){
    if (  this.username == this.correctUsername && this.password ==this.correctPassword ){
      
      this.router.navigateByUrl('/account');
     }else if(this.username == this.correctUsernametwo && this.password == this.correctPasswordtwo ){

      this.router.navigateByUrl('/account');

     }
     else if(this.username == this.correctUsernamethree && this.password == this.correctPasswordthree ){

      this.router.navigateByUrl('/account');

     }
     else if(  this.errotimes >= 1)  {

      this.alertErro = "This is a problem with the credentials";



     }

     else if(this.errotimes > 3){
      alert("Incorrect too many times !")


  }

}
}