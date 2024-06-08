import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private http = inject(HttpClient)
  csrfToken:any;

  constructor(){
    this.csrfToken = "";
  }

  getCsrf(): void{
    this.http.get<any>("http://localhost:8080/api/csrf").subscribe(data => this.csrfToken = data.token);
    console.log(this.csrfToken);
  }

  get(url:string): any{
    return this.http.get(url, {withCredentials: true});
  }

  post(url:string, data:any): any{
    this.getCsrf();
    return this.http.post("http://localhost:8080" + url, + data, {withCredentials: true, headers: new HttpHeaders({"X-CSRF-TOKEN": this.csrfToken})}).subscribe(data => console.log(data));
  }
}
