import { Component, OnInit } from '@angular/core';
import {EvenementService} from '../evenement.service';
import {ActivatedRoute} from  '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  alert:boolean=false;
  modifierEvent = new FormGroup({
    nom: new FormControl(''),
    organisePar: new FormControl(''),
    telephone: new FormControl(''),
    adresse : new FormControl(''),
    description : new FormControl('')
  });

  constructor(private evenement:EvenementService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.evenement.getCurrdata(this.router.snapshot.params.id).subscribe((result)=>{
      console.log(result);
      this.modifierEvent = new FormGroup({
        nom: new FormControl(result['nom']),
        organisePar: new FormControl(result['organisePar']),
        telephone: new FormControl(result['telephone']),
        adresse : new FormControl(result['adresse']),
        description : new FormControl(result['description'])
      });
    })
    
  }
  
  updateEvent()
  {
    this.evenement.updateEvent(this.router.snapshot.params.id,this.modifierEvent.value).subscribe((result)=>{
      console.log(result,"updated successfully");
      this.alert=true;
    });
  }
  closeAlert(){
    this.alert=false;
  }
}
