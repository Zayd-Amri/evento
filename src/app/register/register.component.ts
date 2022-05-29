import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {EvenementService} from '../evenement.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert:boolean=false;
  createUser = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    telephone: new FormControl(''),
    email : new FormControl(''),
    pwd : new FormControl('')
  });
  constructor(private userService:EvenementService) { }

  ngOnInit(): void {
  }
onCreateUser()
{
  this.userService.createUser(this.createUser.value).subscribe((result)=>{
    this.alert=true;
    this.createUser.reset({})
    console.log("get data from service",result);
  })
}
}
