import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IPostagem } from '../../dtos/IPostagem';

@Component({
  selector: 'app-postagem',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './postagem.component.html',
  styleUrl: './postagem.component.css'
})
export class PostagemComponent {
  private postagem:string;
  private tokencsrf:string; 
  private cookie:string;
  private http = inject(HttpClient);
  formulario = new FormGroup({
    postage: new FormControl<string | null>(null, Validators.required)
  })

  constructor(){
    this.tokencsrf = '';
    this.cookie = '';
    this.postagem = '';
  }

  getCsrf(): void{
    this.http.get<any>('/api/csrf').subscribe(data => {
      console.log(data)
    })
  };

  enviarPost(): void{
    this.getCsrf();
    if(this.formulario.value.postage){
      this.postagem = this.formulario.value.postage;
    }
    if(this.postagem){
      this.http.post('/api/oi', this.postagem, {
        headers: {
          "X-CSRF-TOKEN": this.tokencsrf
        }
      })
    }
  };

}
