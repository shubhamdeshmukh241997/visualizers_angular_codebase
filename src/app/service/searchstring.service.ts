import { HttpClient, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { SearchString } from '../model/search-string';

@Injectable({
  providedIn: 'root'
})
export class SearchstringService {

  results : any = [];

  constructor(private _http:HttpClient) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header
    const clonedRequest = req.clone({ headers: req.headers.append('Authorization', environment.authtoken) 
    
    .append('GraphAPIAccessToken', environment.GraphAPIAccessToken)});

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }
  
  public getSearchString(term:string):Observable<SearchString>{
    const url = `https://poht222web.rd.allscripts.com/POH/POH_QA_222/POHBusinessServices/UserMessageWebApi/v1/TeamsMessage/messages/search=${term}`;
    return this._http.get<SearchString>(url);
  }
}
