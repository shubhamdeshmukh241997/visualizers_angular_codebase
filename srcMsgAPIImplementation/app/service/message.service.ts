import { HttpClient, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Messages } from '../model/messages';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _http:HttpClient) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header
    const clonedRequest = req.clone({ headers: req.headers.append('Authorization', environment.authtoken) 
    
    .append('GraphAPIAccessToken', environment.GraphAPIAccessToken)});

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }
  
  public getMessages():Observable<Messages>{
    const url = 'https://poht222web.rd.allscripts.com/POH/POH_QA_222/POHBusinessServices/UserMessageWebApi/v1/TeamsMessage/messages';
    return this._http.get<Messages>(url);
  }


}
