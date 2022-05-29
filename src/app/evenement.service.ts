import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  URL ="http://localhost:3000/event";
  regURL="http://localhost:3000/users";
  constructor(private _http:HttpClient) { }
  getEventList()
  {

    return this._http.get(this.URL);
  }
  addEvent(data){
    return this._http.post(this.URL,data);
  }
  getCurrdata(id)
  {
    return this._http.get(`${this.URL}/${id}`);

  }

  updateEvent(id,data){
    return this._http.put(`${this.URL}/${id}`,data)
  }
  deleteEvent(id)
  {
    console.log(id);
    return this._http.delete(`${this.URL}/${id}`);
  }
  createUser(data)
  {
    return this._http.post(this.regURL,data);

  }
  login(data){
    return this._http.post(this.regURL,data);
  }

}
