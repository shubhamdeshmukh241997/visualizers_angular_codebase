import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UserService implements HttpInterceptor{
  resultdata: any;
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Clone the request to add the new header
        const clonedRequest = req.clone({ headers: req.headers.append('Authorization', environment.authtoken) 
        
        .append('GraphAPIAccessToken', environment.GraphAPIAccessToken)});
    
        // Pass the cloned request instead of the original request to the next handle
        return next.handle(clonedRequest);
      }

//   userdata : any = {
//     "users": [
//         {
//             "id": "ed48e1d7-5558-4c37-94d9-4e5dba0e73ab",
//             "name": "Automation User12",
//             "email": "autouser12@pohdev.com"
//         },
//         {
//             "id": "19d66f27-b80a-42bb-8084-b92c38d44f78",
//             "name": "Automation User10",
//             "email": "autouser10@pohdev.com"
//         },
//         {
//             "id": "2cbdfc3e-309a-4b93-a08a-3c009a8f5d1a",
//             "name": "Automation User3",
//             "email": "AutoUser3@pohdev.com"
//         },
//         {
//             "id": "e52a5ee7-d883-45c2-a96f-87920e6d3955",
//             "name": "Automation User2",
//             "email": "AutoUser2@pohdev.com"
//         },
//         {
//             "id": "17fd5638-ed1f-4e9e-923c-02dc4f233746",
//             "name": "Automation User8",
//             "email": "autouser8@pohdev.com"
//         },
//         {
//             "id": "bd55641d-be0e-4e11-b967-50a3b609c2b8",
//             "name": "Summit1, One",
//             "email": "autouser6@pohdev.com",
//             "jobTitle": "Physician"
//         },
//         {
//             "id": "75b6c263-aebc-41ce-9d5d-a2879d05997d",
//             "name": "Summit3, Three",
//             "email": "autouser15@pohdev.com",
//             "jobTitle": "Physician"
//         },
//         {
//             "id": "d7554c51-e3b8-44dd-8548-3c16aec6e56f",
//             "name": "Messages, Frank",
//             "email": "autouser43@pohdev.com",
//             "jobTitle": "Nurse Practitioner"
//         },
//         {
//             "id": "b4f270e3-6653-47bb-a46c-2d4779edb346",
//             "name": "Sunrise, David",
//             "email": "autouserone@pohdev.com",
//             "jobTitle": "Quality Engineer"
//         },
//         {
//             "id": "32820636-7715-478c-af8a-43b8e63d4be1",
//             "name": "New Dawn, Carol Ann",
//             "email": "autouser_two@pohdev.com",
//             "jobTitle": "Quality Engineer"
//         }
//     ]
// }

  url : string = 'https://poht222web.rd.allscripts.com/POH/POH_QA_222/POHBusinessServices/UserMessageWebApi/v1/TeamsMessage/me'

  storeddata!: Users;

  constructor(private _http: HttpClient) {}

  // async getUsers(){
  //   // console.log("Service Data", this.userdata)
  //   // this._http.get<User>(this.url).subscribe((data:User) => {
  //   //   // console.log(data);
  //   //   this.resultdata = data;
  //   //   console.log("result inside stored",this.resultdata)
  //   // });
  //   this.resultdata = await this._http.get<User>(this.url).subscribe((data:User) => {
  //     console.log(data);
  //     return data;
  //   });
  //   console.log("result stored",this.resultdata)
  //   return this.storeddata;
  // }

  async getUsers(){
    var data1 = await this._http.get<Users>(this.url).toPromise()
    .then((data:any) => {
      // console.log(data);
      this.storeddata = data;
      // console.log("StoredData Inside",this.storeddata);
    })
    console.log("StoredData",this.storeddata);
    return this.storeddata;
  }
}
