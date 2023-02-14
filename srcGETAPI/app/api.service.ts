import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _http:HttpClient) { }

  getData(){
    return this._http.get(this.baseURL);
  }

}
