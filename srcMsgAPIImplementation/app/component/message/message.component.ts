import { Component } from '@angular/core';
import { MessageThread } from 'src/app/model/message-thread';
import { Messages } from 'src/app/model/messages';
import { MessageService } from 'src/app/service/message.service';
import { Participant } from 'src/app/model/participant'; 

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  messages!: Messages;

  constructor(public messageservice: MessageService){
    this.messages = {} as Messages;
  }

  ngOnInit(){
    this.messageservice.getMessages().subscribe((response:Messages) => {
      console.log(response);
      this.messages.messageThreads = response?.messageThreads?.map((item) => {
        var mt = {} as MessageThread;
        mt.name = item?.name;
        mt.id = item?.id;
        mt.webUrl = item?.webUrl;
        mt.participants = item?.participants;
        // mt.participants = item?.participants?.map((item) => {
        //   var p = {} as Participant;
        //   p.id = item?.id;
        //   p.name = item?.name;
        //   p.email = item?.email;
        // })
        mt.lastMessage = item?.lastMessage;
        mt.hasUnreadMessages = item?.hasUnreadMessages;
        mt.hasPriorityMessages = item?.hasPriorityMessages;
        mt.type = item?.type;
        return mt;
      })
    })
  }




}
