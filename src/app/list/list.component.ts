import { Component, OnInit } from '@angular/core';
import {EvenementService} from '../evenement.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public collection:any;
  public EventName:String;
  constructor(private evenement:EvenementService) { }

  ngOnInit(): void {
    this.evenement.getEventList().subscribe((resultat =>{
    this.collection=resultat;
    console.log(this.collection);
    }));
  }
Search(){
  if(this.EventName == "")
  {
    console.log(this.collection);
    this.ngOnInit();
  }
  else{
    this.collection=this.collection.filter(result =>
      {
        return result.nom.toLocaleLowerCase().match(this.EventName.toLocaleLowerCase());
        
      });
  }
}
deleteEvent(id)
{
this.evenement.deleteEvent(id).subscribe((res)=>
{
  this.ngOnInit();
  console.log(res);
})
}
}
