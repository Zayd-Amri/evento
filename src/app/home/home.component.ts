import { Component, OnInit } from '@angular/core';
import {EvenementService} from '../evenement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public collection:any;
  constructor(private evenement:EvenementService) { }

  ngOnInit(): void {
    this.evenement.getEventList().subscribe((resultat =>{
    this.collection=resultat;
    console.log(this.collection);
    }));
  }

}
