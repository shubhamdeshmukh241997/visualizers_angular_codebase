import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerachNameComponent } from './serach-name/serach-name.component';
import { UserService } from './service/user.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SerachNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserService,
    multi: true,
  }, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
