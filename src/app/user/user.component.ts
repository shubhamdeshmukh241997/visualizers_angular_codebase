import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MessageThread } from '../model/message-thread';
import { SearchString } from '../model/search-string';
import { SearchstringService } from '../service/searchstring.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  term:any = new FormControl();

  results! : SearchString;

  constructor(public _searchService:SearchstringService){}

  getSearchResponse(){
    console.log(this.term.value);
    this._searchService.getSearchString(this.term.value).subscribe((data:SearchString) => {
      console.log(data);
      this.results = data;

      this.results.messageThreads = data?.messageThreads?.map((item) => {
        var mt = {} as MessageThread;
        mt.name = item?.name;
        mt.id = item?.id;
        mt.webUrl = item?.webUrl;
        mt.participants = item?.participants;
        mt.lastMessage = item?.lastMessage;
        mt.hasUnreadMessages = item?.hasUnreadMessages;
        mt.hasPriorityMessages = item?.hasPriorityMessages;
        mt.type = item?.type;
        return mt;
      })
    })
  }
}
