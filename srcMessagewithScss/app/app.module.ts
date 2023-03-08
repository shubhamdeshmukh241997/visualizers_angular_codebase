import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageAreaComponent } from './component/message-area/message-area.component';
import { InboxListComponent } from './component/inbox-list/inbox-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageAreaComponent,
    InboxListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
