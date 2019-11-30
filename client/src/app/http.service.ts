import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get('/practice')
  }

  create(practice){
    return this._http.post('/practice', practice)
  }
}
