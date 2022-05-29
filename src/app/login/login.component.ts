import { Component, OnInit } from '@angular/core';
import {EvenementService} from '../evenement.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    pwd: new FormControl('',[Validators.required]),
  });
  constructor(private evenement:EvenementService) { }

  ngOnInit(): void {

  }
  onLogin(){
    this.evenement.login(this.loginForm.value).subscribe((result)=>{
      console.log("get data from service",result);
    })
  }

}
