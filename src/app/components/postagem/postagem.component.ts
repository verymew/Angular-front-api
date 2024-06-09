import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../../services/http-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-postagem',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './postagem.component.html',
  styleUrl: './postagem.component.css'
})
export class PostagemComponent {
  private postagem:string;
  private cookie:string;
  private csrfToken:string;
  private http = inject(HttpClient);

  formulario = new FormGroup({
    postage: new FormControl<string | null>(null, Validators.required)
  })

  constructor(){
    this.cookie = '';
    this.postagem = '';
    this.csrfToken = '';
  };

  getCsrf(): void{
    this.http.get<any>("/api/csrf").subscribe(data => this.csrfToken = data.token);
    console.log(this.csrfToken);
  };

  enviarPost(): void{
    if(this.formulario.value.postage){
      this.postagem = this.formulario.value.postage;
      let body = {
        "message": this.postagem
      }
      this.http.post<string>("/api/oi", body).subscribe(data => console.log(data));
    };
  };  
};
