import { HttpClient, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { SearchName } from '../model/search-name';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header
    const clonedRequest = req.clone({ headers: req.headers.append('Authorization', environment.authtoken) 
    
    .append('GraphAPIAccessToken', environment.GraphAPIAccessToken)});

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }

  getAllUsers(term:string, top:string, skip:string):Observable<SearchName>{
    const url = `https://poht222web.rd.allscripts.com/POH/POH_QA_222/POHBusinessServices/UserMessageWebApi/v1/TeamsMessage/people/search=${term}?top=${top}&skip=${skip}`
    return this._http.get<SearchName>(url);
  }
}
