import { Component } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private _httpService: HttpService){}

  getPractices(){
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      console.log(data)
    }) 
  }

  createPractice(){
    let prac = {
      'title': "Typical Doomsday",
      'complete': true
    }
    let observable = this._httpService.create(prac);
    observable.subscribe(data => {
      console.log(data)
    }) 
  }
}
