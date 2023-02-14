import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent {

  results : any = [];

  constructor(private _http:HttpClient){}

  search(term:any){
    console.log(term);
    this._http.get(`https://restcountries.com/v2/name/${term}`).toPromise()
    .then((data:any) => {
      console.time('request-length');
      console.log(data);
      console.timeEnd('request-length');
      this.results = data;
    });
  }
}