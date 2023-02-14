import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public results :any = [];
  filteredData : any = [];
  
  flag : any;
  constructor(private _service:DataService){}

  ngOnInit(){
    this.results = this._service.getData();
    console.log(this.flag)
  }

  // FilterGenderMale(){
  //   // console.log("Male button is clicked")
  //   this.results.forEach((element: any) => {
  //     if(element.gender === 'Male'){
  //       this.filteredData.push(element);
  //       // console.log(this.filteredData);
  //       this.renderedData = this.filteredData;
  //       console.log(this.renderedData)
  //     }
  //   });
  // }

  FilterGender(){
    this.flag = true;
  }
}
