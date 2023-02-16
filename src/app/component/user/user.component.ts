import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchName } from 'src/app/model/search-name';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  results! : SearchName;

  term:any = new FormControl();
  top:any = new FormControl();
  skip:any = new FormControl();

  constructor(public _userService:UserService){}

  getNameResponse(){
    // console.log(this.term.value);
    // console.log(this.top.value);
    // console.log(this.skip.value);

    this._userService.getAllUsers(this.term.value, this.top.value, this.skip.value)
      .subscribe((data: SearchName) => {
        console.log(data);
        this.results = data;
    })
  }

}
