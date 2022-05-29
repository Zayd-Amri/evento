import { Component, OnInit } from '@angular/core';
import {EvenementService} from '../evenement.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  alert:boolean=false;
  ajoutEvent = new FormGroup({
    nom: new FormControl('',[Validators.required]),
    organisePar: new FormControl('',[Validators.required]),
    telephone: new FormControl('',[Validators.required]),
    adresse : new FormControl(''),
    description : new FormControl(''),
    image :new FormControl('')
  });

  constructor(private evenement:EvenementService) { }

  ngOnInit(): void {
    

  }
  createEvent(){
    this.evenement.addEvent(this.ajoutEvent.value).subscribe((result)=>{
      this.alert=true;
      this.ajoutEvent.reset({})
      console.log("get data from service",result);
    })
  }
  closeAlert(){
    this.alert=false;
  }

}
