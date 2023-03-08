import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
  results : any = [];

  constructor(private _http:HttpClient){}

  term:any = new FormControl();

  ngOnInit(){
    this.term.valueChanges
    .pipe(debounceTime(2000),distinctUntilChanged())
    .subscribe((searchterm:any) => {
      this._http.get(`https://restcountries.com/v2/name/${searchterm}`).subscribe((data : any) => {
        console.time('request-length');
        console.log(data);
        console.timeEnd('request-length');
        this.results = data;
      })
    })
  }
}