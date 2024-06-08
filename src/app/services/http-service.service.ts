import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private http = inject(HttpClient)
  csrfToken:string;

  constructor(){
    this.csrfToken = "";
  }

  getCsrf(): void{
    this.http.get<any>("/api/csrf").subscribe(data => this.csrfToken = data.token);
  }

  get(url:string): any{
    return this.http.get(url, {withCredentials: true});
  }

  post(url:string, data:any): any{
    return this.http.post(url, + data, {withCredentials: true});
  }
}
