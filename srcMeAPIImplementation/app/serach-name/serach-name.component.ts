import { Component } from '@angular/core';
import { User } from 'srcGetAPIwithParam/app/model/user';
import { Users } from '../model/users';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-serach-name',
  templateUrl: './serach-name.component.html',
  styleUrls: ['./serach-name.component.css']
})
export class SerachNameComponent{
  flag: boolean = false;
  userdata!: Users;

  constructor(private _userservice:UserService){}

  async clickMe(){
    this.userdata = await this._userservice.getUsers();
    console.log("Component",this.userdata)
  }
}
