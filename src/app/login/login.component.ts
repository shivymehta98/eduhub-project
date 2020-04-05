import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
 import { UserService } from '../user.service';
 import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup=new FormGroup({
    username:new FormControl(null,Validators.required),
    password:new FormControl(null, Validators.required)
  });
  constructor(private _router:Router, private _user:UserService,private toastr: ToastrService) { 
    // this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  moveToRegister(){
    this._router.navigate(['/register']);
  }

  login(){
    if(!this.loginForm.valid){
      console.log('Invalid');
         this.toastr.error('Invalid Credentials', '');
      return;
    }

   //console.log(JSON.stringify(this.loginForm.value));
    this._user.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data=>{console.log(data);
this._router.navigate(['/home']);

this.toastr.success('Login Successfull!', '');
},
      error=> this.toastr.error('Invalid Username or Password ', '')
    
    )
  }
  
}
